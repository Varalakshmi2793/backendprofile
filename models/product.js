    const fs=require('fs');
    const path=require('path');

    module.exports=class Product{
        constructor(title){
            this.title=title;

        }
        save(){
            const p=path.join(
                path.dirname(__filename),
                'data',
                'product.json'
            );
            fs.readFile(p,(err,filecontent)=>{
                let product=[];
                if(!err){
                    product=JSON.parse(filecontent)
                }
                product.push(this);
                fs.writeFile(p, JSON.stringify(product), (err)=>{
                    console.log(err);
                })
            });
        }
        static fetchAll(cb) {
            const p = path.join(
              path.dirname(__filename),
              'data',
              'products.json'
            );
            fs.readFile(p, (err, fileContent) => {
              if (err) {
                cb([]);
              }
              cb(JSON.parse(fileContent));
            });
          }
            }   