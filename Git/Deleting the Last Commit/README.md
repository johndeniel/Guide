# Deleting the Last Commit in Git

<div align="justify"> In Git, deleting the last commit can be achieved through several methods. If you've already pushed the commit to a remote repository on GitHub, keep in mind that it's generally not recommended to rewrite the commit history, as it can cause issues for collaborators. However, if the commit hasn't been pushed or if you're working on a personal repository, you can use the following steps to delete the last commit: </div>

## Step 1: Make Sure You Have a Backup
<div align="justify"> Before proceeding, it's essential to have a backup of your repository or at least know how to revert changes in case something goes wrong. Make sure you have a copy of your project in a safe location. </div>

## Step 2: Open Terminal or Command Prompt
<div align="justify"> To delete the last commit, you'll need to use the command line. Open your Terminal (for Mac and Linux) or Command Prompt (for Windows) and navigate to the local repository directory where your project is located. </div>

## Step 3: Check Your Git History
<div align="justify"> Use the following command to view the commit history and verify that you want to delete the last commit: </div>

```git
git log
```
<div align="justify"> This will display a list of commits with their commit hashes, commit messages, and other details. The most recent commit will be at the top. </div>

## Step 4: Delete the Last Commit
<div align="justify"> To delete the last commit, you have a few options. The method you choose will depend on whether you want to keep the changes introduced by the commit or simply remove it from the history. </div>

   - 4.1. If You Want to Keep the Changes Locally: 
   
     Use the following command to remove the last commit while keeping the changes in your working directory:
   
     ```git
     git reset --soft HEAD~1
     ```
     This will remove the last commit, but the changes will still be in your working directory. You can now make any necessary changes and create a new commit.
     
   - 4.2. If You Want to Discard the Changes Completely:
   
     To delete the last commit and discard all changes introduced by it, use the following command:
   
     ```git
     git reset --hard HEAD~1
     ```    
     Warning: This command will permanently remove all changes, and they cannot be recovered. Use it with caution.
     
## Step 5: Push Changes (Optional)
<div align="justify"> If you've already pushed the commit to a remote repository on GitHub and you used one of the methods that modifies history (e.g., git reset --hard), you will need to force-push the changes. However, this can cause issues for other collaborators who have already pulled the previous commit. </div>

   - If you're working on a personal repository or if you're confident that force-pushing is safe in your situation, you can use: 
   
     ```git
     git push origin <branch-name> --force
     ```   
     Replace `<branch-name>` with the name of the branch where the last commit was deleted.   
     
## Step 6: Verify Your Changes
<div align="justify"> After completing the above steps, double-check that the last commit is successfully removed by using git log again. Make sure everything looks as expected before continuing with further work or collaboration. </div>

<br>

<div align="justify"> That's it! You've now deleted the last commit in your local Git repository. Remember to be cautious when modifying Git history, especially if you're working with others. </div>