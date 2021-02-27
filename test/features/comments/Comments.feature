Feature: Check if users are able add/delete comments to articles in BBlog site

    Scenario: Verify a anonymous user is unable to comment in an articles
        Given a "anonymous" user is in BBlog website
        When the user selects an article from "global" feed
        Then the user is unable to comments in the article

    @smoke @test
    Scenario Outline: Verify a registered user is able to add comments to an article
        Given a "registered" user is in BBlog website
        When the user selects an article from "user" feed
        And the user adds a "<comment>" in the article
        Then the comment is successfully registered
        And the user logs out
        
        Examples:
        | comment                 |
        | Test comment from User1 |
    
    @smoke @test
    Scenario: Verify a registered user is able to delete comments that they added an article
        Given a "registered" user is in BBlog website
        When the user selects an article from "user" feed
        Then the user is able to delete the comment added by them
        And the user logs out

#end