<!--
    Pull Request Naming Convention
    next -> master: chore(release): deploy public
    beta -> next: chore(release): deploy next
    feature -> beta: chore(release): deploy beta
 -->

# Checklist (Deployment)

<!--
    Several fastlane actions communicate with Apple services that need authentication. This can pose several challenges on CI.
    As your CI machine will not be able to prompt you for your two-factor authentication or two-step verification information, you can generate a login session for your Apple ID in advance by running `fastlane spaceauth -u user@email.com`
-->

- [] Have you updated `FASTLANE_SESSION` secret?
