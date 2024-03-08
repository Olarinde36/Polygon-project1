const fs = require('fs');
const path = require('path');
console.log(__dirname);

for (let i =  1; i <=  5; i++) {

  const json = {
      name: `PureDollarToken Data #${i}`, 
      description: `PureDollarTokenDescription #${i}`,
      image: `https://gateway.pinata.cloud/ipfs/QmctKpdG21GG9L1r4qq1ZqD1VaUA8RWeASw7Wm6TyXhEKE/${i}.jpeg`,
      attributes: []
  };

  fs.writeFileSync(
    path.join(__dirname, 'PureDollarImageData', String(i)),
    JSON.stringify(json)
  );
}
