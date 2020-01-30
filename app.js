const fs=require("fs")

if (process.argv[2] === "List") {
     const data=fs.readFile("./note.json", "utf8", function(err, data) {
      const notes = JSON.parse(data);
      console.log("Printings " + notes.length + " note(s)");
      notes.map(el =>
        console.log("\n Title :" + el.title + "\n Body : " + el.body)
      );
    });
  } 
 
if (process.argv[2] === 'Add') {
    if (
      process.argv[3] === '--title' &&
      process.argv[4] &&
      process.argv[5] === '--body' &&
      process.argv[6]
    ) {
      fs.readFile('./note.json', 'utf8', (err, data) => {
        if (err) {
          return console.log(err);
        } else {
          const notes = JSON.parse(data);
          notes.push({ title: process.argv[4], body: process.argv[6] });
          const json = JSON.stringify(notes);
          fs.writeFile('./note.json', json, 'utf8', err => {
            if (err) console.error(err);
            console.log('Note created');
          });
        }
      });
    } else {
      console.log(
        'add options:\n --title to set your note title\n --body to set your note body'
      );
    }
}
if(process.argv[2]=="Read"){
   const data= fs.readFile("./note.json", "utf8", function(err, data) {
        const note = JSON.parse(data);
        console.log("Note found ");
        const filterNote = note.filter(el => el.title == process.argv[4]);
        console.log(
          "\n Title :" +
            filterNote[0].title +
            "\n Body : " +
            filterNote[0].body
        );
      });
      
    }

      
   
if(process.argv[2]=="Remove"){
           fs.readFile("./note.json", "utf8", function(err, data) {
            const note = JSON.parse(data);
            const filterNote = note.filter(el => el.title != process.argv[4]);
            filterNote.map(el=>
                console.log(
                    "\n Title :" +
                      filterNote[0].title +
                      "\n Body : " +
                      filterNote[0].body
                  ))
           // console.log(JSON.stringify(filterNote));
            fs.writeFile("./note.json", JSON.stringify(filterNote), err => {
              if (err) {
                console.error(err);
                return;
              }
            });
          });
        }


