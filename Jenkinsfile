pipeline {
    agent {
        kubernetes {
            label 'Backbase'
            defaultContainer 'Backbase'
            yamlFile '<input agent.yamlFile location>'
        }
    }

    environment {
       // Take global environment variables from Jenkins
       BUILD_BRANCH = "${env.BRANCH}"
       GIT_BRANCH = "${env.GIT_LOCAL_BRANCH}"
       BUILD_URL = "${env.BUILD_URL}"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Downloading npm dependencies..'
                    sh 'npm install'
                echo 'Updating driver..'
                    sh 'npm run webdriver-update'
                echo 'Compiling typeScript code..'
                    sh 'npm run compile'
                echo 'Running tests..'
                    sh 'npm run test'
            }
        }
     }

     post {
       always {
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: '/target/reports', reportFiles: 'cucumberReport.html', reportName: 'Summary Report', reportTitles: ''])
       }
       success {
          script {
             slackSend (channel: '<#ChannelName>', color: '#00FF00',  message: "SUCCESS: Automation Test results for BRANCH=${GIT_BRANCH} and BUILD_ID=${BUILD_ID} <${BUILD_URL}Summary_20Report|ClickHere> and detailed results can be seen <${BUILD_URL}Detailed_20Report|Here>")
          }
       }

       failure {
          script {
             slackSend (channel: '<#ChannelName>', color: '#FF0000',  message: "FAILED: Automation Test results for BRANCH=${GIT_BRANCH} and BUILD_ID=${BUILD_ID} <${BUILD_URL}Summary_20Report|ClickHere> and detailed results can be seen <${BUILD_URL}Detailed_20Report|Here>")
          }
       }
     }
}