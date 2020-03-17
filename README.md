# Summary

This Google Apps Script takes all top-level items that are not folders, and moves them into a designated folder. It's useful for:

- Gmail attachments that use Drive as a backer
- Google Calendar attachments that use Drive as a backer

# Setting up this script on your Google account

1. [Install the CLASP command line tool](https://github.com/google/clasp/#install)
1. Run `clasp login` to get your Google credentials set up
1. Create the project from `clasp` in your [Google Scripts](script.google.com).
1. Update the "toFolderId" constant to contain the ID of the folder to move things to.
1. Set up an [Apps Script schedule](https://developers.google.com/apps-script/guides/triggers/installable#time-driven_triggers)
