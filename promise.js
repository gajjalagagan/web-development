async function GetUser(){
    let raw = await fetch(`https://randomuser.me/api/`);
    let data =  await raw.json();
    console.log(data);
}
GetUser()