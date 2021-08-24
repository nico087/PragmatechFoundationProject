function myFunction() {

    let users=[
        {
          id:1,
          ad:'Nofel',
          soyad:'Salahov',
        },
        {
          id:2,
          ad:'Ramin',
          soyad:'Semedov'
        },
        {
          id:3,
          ad:'Nijat',
          soyad:'Bagirov'
        },
        {
          id:4,
          ad:'Ferid',
          soyad:'Piriyev'
        },
        {
          id:5,
          ad:'Elnar',
          soyad:'Memmedov'
        }
      ]

    document.getElementById("user-id-1").innerHTML = users[0].id;
    document.getElementById("user-firstname-1").innerHTML = users[0].ad;
    document.getElementById("user-surname-1").innerHTML = users[0].soyad;
    document.getElementById("user-id-2").innerHTML = users[1].id;
    document.getElementById("user-firstname-2").innerHTML = users[1].ad;
    document.getElementById("user-surname-2").innerHTML = users[1].soyad;
    document.getElementById("user-id-3").innerHTML = users[2].id;
    document.getElementById("user-firstname-3").innerHTML = users[2].ad;
    document.getElementById("user-surname-3").innerHTML = users[2].soyad;
    document.getElementById("user-id-4").innerHTML = users[3].id;
    document.getElementById("user-firstname-4").innerHTML = users[3].ad;
    document.getElementById("user-surname-4").innerHTML = users[3].soyad;
    document.getElementById("user-id-5").innerHTML = users[4].id;
    document.getElementById("user-firstname-5").innerHTML = users[4].ad;
    document.getElementById("user-surname-5").innerHTML = users[4].soyad;

    

    

}


function clean() {
    document.getElementById("user-id-1").innerHTML = " "
    document.getElementById("user-firstname-1").innerHTML = " "
    document.getElementById("user-surname-1").innerHTML = " "
    document.getElementById("user-id-2").innerHTML = " "
    document.getElementById("user-firstname-2").innerHTML = " "
    document.getElementById("user-surname-2").innerHTML = " "
    document.getElementById("user-id-3").innerHTML = " "
    document.getElementById("user-firstname-3").innerHTML = " "
    document.getElementById("user-surname-3").innerHTML = " "
    document.getElementById("user-id-4").innerHTML = " "
    document.getElementById("user-firstname-4").innerHTML = " "
    document.getElementById("user-surname-4").innerHTML = " "
    document.getElementById("user-id-5").innerHTML = " "
    document.getElementById("user-firstname-5").innerHTML = " "
    document.getElementById("user-surname-5").innerHTML = " "

}