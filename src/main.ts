function main(): void {
  const rootFiles = DriveApp.getRootFolder().getFiles();

  while (rootFiles.hasNext()) {
    const file = rootFiles.next();

    const toFolderId = "your-folder-id";

    const targetFolder = DriveApp.getFolderById(toFolderId);

    // Add the file to the target folder
    targetFolder.addFile(file);

    // And remove the file from the old root folder
    DriveApp.getRootFolder().removeFile(file);
  }
}
