# Moving Docker Desktop Data to `Drive D:` using WSL

In this guide, we'll explore how to export, unregister, and import Docker Desktop data using Windows Subsystem for Linux (WSL).

## Export Docker Desktop Data

To export the Docker Desktop data, you can use the following command:

```bash
wsl --export docker-desktop-data D:\Docker\dockerdesktop.tar
```

This command will create a TAR archive named `dockerdesktop.tar` containing the Docker Desktop data from the specified directory (`D:\Docker\`). You can choose a different directory if needed.

## Unregister Docker Desktop Data

If you want to unregister Docker Desktop data, you can use the following command:

```bash
wsl --unregister docker-desktop-data
```

Running this command will unregister the specified distribution named `docker-desktop-data.` This can be useful when you want to remove the WSL distribution associated with Docker Desktop data.

## Import Docker Desktop Data

To import Docker Desktop data back into WSL, you can use the following command:

```bash
wsl --import docker-desktop-data D:\Docker\ D:\Docker\dockerdesktop.tar
```
This command will import the Docker Desktop data from the dockerdesktop.tar archive located in the `D:\Docker\` directory. The data will be imported into a WSL distribution named `docker-desktop-data.`

## Clean Up
After a successful import, you might want to delete the `dockerdesktop.tar` file to save space. You can do this using the following command:

```bash 
del /F D:\Docker\dockerdesktop.tar
```

This command will remove the `dockerdesktop.tar` file from the `D:\Docker\` directory, freeing up space on your system.

---

Please note that these commands are meant to be executed in a command prompt or terminal window with administrative privileges.

Remember to replace the paths and filenames with your actual file paths and desired distribution names.

**Important:** Always ensure that you have backed up any critical data before performing operations like unregistering or importing Docker Desktop data.