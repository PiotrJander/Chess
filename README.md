# chess

## UPDATE: running front end with Docker

### Linux, Mac, Windows 10 Pro

1. Install `Docker` if using Linux. Or `Docker for Mac`. Or `Docker for Windows` if using Windows 10 Pro.
2. Run Docker
3. Do `./gradlew distDocker` to make the Docker image for the server. Running this for the first time will
    take a while, as images need to be downloaded.
4. Do `docker-compose up`. Your UI should run on `localhost:3000`. The server will run on port `9090`.

### Windows 10 Home or older Windows: Docker Toolbox

I could tell you how to do it, but better use Linux instead – bum

1. ~~Install `Docker` if using Linux. Or `Docker for Mac`. Or `Docker for Windows` if using Windows 10 other than Home.
    Or `Docker Toolbox` if using Windows 10 Home or older Windows.
2. Run Docker
3. Do `./gradlew distDocker` to make the Docker image for the server.
4. If using `Docker Toolbox`, set an environment variable: in Bash `export SERVER=$(docker-machine ip)`,
    on Windows something like `SET SERVER=value of docker-machine ip`
5. Do `docker-compose up`. Your UI should run on `localhost:3000`, or if using `Docker Toolbox`, on the port 3000
    of your `docker-machine ip`. The server will run on port `9090`.~~

### Making changes

To reload changes in the server

```
./gradlew distDocker && docker-compose up -d --build server
```

To remote debug the Java server running in a Docker container, in IDEA go to
`Run configuration > Add + > Remote`. Select port 8000. Now you can set breakpoints
and start debugging remotely.

## Setup

Make sure you have Node.js and NPM installed. Then follows these

```sh
mkdir chess && cd chess 
PROJ_DIR=`pwd`  # this is not necessary of course, just for clarity in what follows

git clone <repo> .

./gradlew run  # run engine / server; from $PROJ_DIR; will install Gradle if you don't have it yet

cd ui
npm install  # from $PROJ_DIR/ui; run once to install Node deps
npm start    # start the front end; run every time you start the front end
```

## Development

IntelliJ IDEA is recommended. When you import the project to IDEA, make sure to point to the `build.gradle` file 
to import as a Gradle project.

If developing on Windows 10, it is worth trying out the [Bash shell for Windows 10](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/), maybe even with the [ComEmu emulator](https://conemu.github.io/)

Bash for Windows comes with a number of nice Unix utils:

```sh
# Unix filesystem commands
ls  # not dir!

# install through apt-get
sudo apt-get install npm

# seamless git integration
git clone .

# built-in ssh, which will come in handy if you ever remote log in to the cloud or virtual machines
ssh marcin-komputer  # we've got your private key hehehe
```

Good luck!
