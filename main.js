var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png.","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names=["Pranay Raval","Snehal Raval","Krushaan Raval","Aatmaja Raval"];
var i=0;
function update()
{
    i++;
    var family_array=5
    if(i>family_array)
    {
        i=0;
    }
    var updateimage=images[i];
    var updatedname=names[i];
    documment.getElementById(""family_member_image").src=updatedimage;
    documment.getElementById(""family_member_name").innerHTML=updatedname;
    

}