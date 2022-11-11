const { exec } = require("child_process")
const fs = require("fs")

PATH_TO_WALLPAPERS = process.env.HOME + "/Pictures/Wallpaper/Anime";

try{
    try{
        var images = fs.readdirSync(PATH_TO_WALLPAPERS)
        
        var randomNumber = Math.floor(Math.random() * images.length)

        try {
            exec("feh --bg-scale " + PATH_TO_WALLPAPERS + "/" + images[randomNumber], (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    return;
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                console.log(`stdout: ${stdout}`);                
            })

        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log("ERROR: Please go to /usr/bin/wallpaper-changer and enter a valid path")
    }


 } catch (err) {
    console.log(err);
}
