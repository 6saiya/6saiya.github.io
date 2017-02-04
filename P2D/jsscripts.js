/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var obj;
var objetr;
var numberofcolumns = document.getElementById("columns");
var numberoflines = document.getElementById("lines");
var moused=0;
var mouseover=0;
var colorrange;
var codearea;
var selectedarray;
selectedarray=document.getElementById("kindofarray");

    
function readcolumns()
{    
    document.getElementById("pcolumns").innerHTML=numberofcolumns.value;
}
function readlines()
{
    document.getElementById("plines").innerHTML=numberoflines.value;
}
     
function funkcja2(zmienna)
{
    document.getElementById('divki').onmousedown = function(){moused=1;};
    document.getElementById('divki').onmouseup = function(){moused=0;};
         
    if (moused==1)
    {   
       // zmienna.style.backgroundColor = "#003366";
        zmienna.style.backgroundColor = colorrange.value;
    }  
}
function funkcja3(zmienna)
{
    zmienna.style.backgroundColor = colorrange.value; 
}
function removeelements()
{
    var elem = document.getElementById("intro");
    elem.parentNode.removeChild(elem);
    return false;
}
function convertColor(color)
{  
    var rgbColors=new Object();

    ///////////////////////////////////
      // Handle rgb(redValue, greenValue, blueValue) format
      //////////////////////////////////
    if (color[0]=='r')
    {
        // Find the index of the redValue.  Using subscring function to 
        // get rid off "rgb(" and ")" part.  
        // The indexOf function returns the index of the "(" and ")" which we 
        // then use to get inner content.  
    color=color.substring(color.indexOf('(')+1, color.indexOf(')'));

        // Notice here that we don't know how many digits are in each value,
        // but we know that every value is separated by a comma.
        // So split the three values using comma as the separator.
        // The split function returns an object.
    rgbColors=color.split(',', 3);

        // Convert redValue to integer
    rgbColors[0]=parseInt(rgbColors[0]);
        // Convert greenValue to integer
    rgbColors[1]=parseInt(rgbColors[1]);
        // Convert blueValue to integer
    rgbColors[2]=parseInt(rgbColors[2]);		
    }

      ////////////////////////////////
      // Handle the #RRGGBB' format
      ////////////////////////////////
    else if (color.substring(0,1)=="#")
    {
        // This is simples because we know that every values is two 
        // hexadecimal digits.
    rgbColors[0]=color.substring(1, 3);  // redValue
    rgbColors[1]=color.substring(3, 5);  // greenValue
    rgbColors[2]=color.substring(5, 7);  // blueValue

        // We need to convert the value into integers, 
        //   but the value is in hex (base 16)!
            // Fortunately, the parseInt function takes a second parameter 
        // signifying the base we're converting from.  
    rgbColors[0]=parseInt(rgbColors[0], 16);
    rgbColors[1]=parseInt(rgbColors[1], 16);
    rgbColors[2]=parseInt(rgbColors[2], 16);
        }
    return rgbColors;
}
function dec2hex(i)
{
    var result = "00";
    if      (i >= 0    && i <= 15)    { result = "0" + i.toString(16); }
    else if (i >= 16   && i <= 255)   { result =    i.toString(16); }
    return result;
}
function blackorwhite(x,y)
{
    var pomoc=convertColor(document.getElementById("divki").rows[y].cells[x].style.backgroundColor);
    var average=0;
    for (var h=0;h<3;h++)
    {
        if (pomoc[h]==undefined) {pomoc[h]=255;}
        average=average+pomoc[h];
    }   
    average=average/3;                    
    average=Math.round(average);
    if (average>128) return 1; else return 0;
    
}

function convertcolorstocode(argument)
{
    var holderv = 0;
    var holderfortext="";
    var carray = document.getElementById("divki");
    argument.value = "//Created using dot2pic.com\n\
const int array[]={"

    switch(selectedarray.selectedIndex)
    {
        case 0://monochromatic, horizontal, 1bit per byte    
            for (var i=0;i<numberoflines.value;i++)
            {
                for (var j=0;j<numberofcolumns.value;j++)
                {                                    
                    if ((i==numberoflines.value-1)&&(j==numberofcolumns.value-1))
                    {
                        if (blackorwhite(j,i)==1)
                        {
                            holderfortext+="0x00";  
                        }
                        else
                        {
                            holderfortext+="0x01";
                        }
                    }
                    else
                    {
                        if (blackorwhite(j,i)==1)
                        {
                            holderfortext+="0x00,";  
                        }
                        else
                        {
                            holderfortext+="0x01,";
                        }
                    }                  
                }
                argument.value+=holderfortext;
                holderfortext="";
            }
        break;
        case 1://monochromatic, horizontal, 8bit per byte 
            //var holderforbits=0;
            var bitnext=(numberofcolumns.value/8);
            var bitnexshift=(numberofcolumns.value%8);
            var bitnextholder=0;
            var numberofnextbits=7;
            var lastcell=0;

            for (var i=0;i<numberoflines.value;i++)
            {
                numberofnextbits=7;
                for (var j=0;j<numberofcolumns.value;j++)
                {
                    if ((i==numberoflines.value-1)&&(j==numberofcolumns.value-1)) lastcell=1;
                    if (blackorwhite(j,i)==1)
                    {
                        holderforbits&=~(1<<numberofnextbits);                   
                    }
                    else
                    {
                        holderforbits|=(1<<numberofnextbits);
                    }

                    if (numberofnextbits==0)
                    {                   
                        if (lastcell==1) holderfortext+="0x"+dec2hex(holderforbits)+"";
                        else holderfortext+="0x"+dec2hex(holderforbits)+",";
                        numberofnextbits=8;
                        bitnextholder++;                   
                    }         
                    numberofnextbits--;
                }
                if (bitnexshift!=0)
                {
                    if (lastcell==1) holderfortext+="0x"+dec2hex(holderforbits>>>(8-bitnexshift))+"";
                    else holderfortext+="0x"+dec2hex(holderforbits>>>(8-bitnexshift))+",";
                }
                argument.value+=holderfortext;
                holderfortext="";
            }
        break;
        case 2://monochromatic, vertical, 8bit per byte 
            var holderforbits=0;
            var bitnext=0;
            var k=0;
            var lastcell=0;

            for (var i=0;i<numberoflines.value;i+=8)
            {
                for (var j=0;j<numberofcolumns.value;j++)
                {
                    for (k=0;k<8;k++)
                    {
                        if ((i+k==numberoflines.value-1)&&(j==numberofcolumns.value-1)) lastcell=1;
                        if (numberoflines.value==(i+k)) {bitnext=1;break;} 

                        if (blackorwhite(j,i+k)==1)
                        {
                            holderforbits&=~(1<<(7-k));                   
                        }
                        else
                        {
                            holderforbits|=(1<<(7-k));
                        }
                    }
                    if (bitnext=1)
                    {
                        if (lastcell==1) holderfortext+="0x"+dec2hex(holderforbits>>>(8-k))+"";
                        else holderfortext+="0x"+dec2hex(holderforbits>>>(8-k))+",";
                    }
                    else
                    {
                        if (lastcell==1) holderfortext+="0x"+dec2hex(holderforbits)+"";
                        else holderfortext+="0x"+dec2hex(holderforbits)+",";
                    }
                    holderforbits=0;
                }
                argument.value+=holderfortext;
                holderfortext="";
            }
        break;
        case 3://16 shades gray   
            var average=0;
            for (var i=0;i<numberoflines.value;i++)
            {
                for (var j=0;j<numberofcolumns.value;j++)
                {
                    var pomoc=convertColor(carray.rows[i].cells[j].style.backgroundColor);
                    for (var h=0;h<3;h++)
                    {
                        if (pomoc[h]==undefined) {pomoc[h]=255;}
                        average+=pomoc[h];
                        
                    }
                    average=average/3;
                     
                    average=Math.round(average*(15/255));
                        if ((i==numberoflines.value-1)&&(j==numberofcolumns.value-1)) holderfortext+="0x"+dec2hex(average);
                        else holderfortext+="0x"+dec2hex(average)+",";   
                        average=0;
                }
                argument.value+=holderfortext;
                holderfortext="";
            }
        break;
        case 4://color 24 bit           
            for (var i=0;i<numberoflines.value;i++)
            {
                for (var j=0;j<numberofcolumns.value;j++)
                {
                    var pomoc=convertColor(carray.rows[i].cells[j].style.backgroundColor);
                    for (var h=0;h<3;h++)
                    {
                        if (pomoc[h]==undefined) {pomoc[h]=255;}
                        if ((i==numberoflines.value-1)&&(j==numberofcolumns.value-1))
                        {    
                            if (h==2) holderfortext+="0x"+dec2hex(pomoc[h]);
                            else holderfortext+="0x"+dec2hex(pomoc[h])+","; 
                                                         
                        }
                        else
                        {
                            holderfortext+="0x"+dec2hex(pomoc[h])+","; 
                        }    
                    }                                                                                       
                }
                argument.value+=holderfortext;
                holderfortext="";
            }
        break;
            
    } 

    argument.value += "}";
        
}
function cleartable()
{
    for (var i=0;i<numberoflines.value;i++)
    {
        for (var j=0;j<numberofcolumns.value;j++)
        {
            document.getElementById("divki").rows[i].cells[j].style.backgroundColor="white";
            codearea.value="";
        }
    }        
}
function hideshow()
{
    document.getElementById("mono1bit").style.display="none";
    document.getElementById("mono8bithor").style.display="none";
    document.getElementById("mono8bitver").style.display="none";
    document.getElementById("16shadesgray").style.display="none";
    document.getElementById("color24bit").style.display="none";
    switch(selectedarray.selectedIndex)
    {
        case 0:
            document.getElementById("mono1bit").style.display="block";
        break;
        case 1:
            document.getElementById("mono8bithor").style.display="block";
        break;
        case 2:
            document.getElementById("mono8bitver").style.display="block";
        break;
        case 3:
            document.getElementById("16shadesgray").style.display="block";
        break;
        case 4:
            document.getElementById("color24bit").style.display="block";
        break;
    }
}
function createtable()
{	
    //selectedarray=document.getElementById("kindofarray");
    removeelements();
    reloadbutton = document.createElement("input");
    reloadbutton.className="btn";
    reloadbutton.type="button";
    reloadbutton.value="返回";
    reloadbutton.onclick=function(){location.reload();};
       
    refreshbutton = document.createElement("input");
    refreshbutton.className="btn";
    refreshbutton.type="button";
    refreshbutton.value="清除所有";
    refreshbutton.onclick=function(){cleartable();};
        
    colorstocodebutton = document.createElement("input");
    colorstocodebutton.className="btn";
    colorstocodebutton.type="button";
    colorstocodebutton.value="转换数组";
    
    previewbutton = document.createElement("input");
    previewbutton.className="btn";
    previewbutton.type="button";
    previewbutton.value="预览数组";
    previewbutton.name = "upload";
    
    uploadlabel = document.createElement("label");
    uploadlabel.id="upllabel";
    uploadlabel.className="labelstyle";
    
    convertbmp = document.createElement("input");
    convertbmp.type="file";
    convertbmp.id="filebrowsed";
    convertbmp.accept=".bmp";
    convertbmp.className="convbm";
    convertbmp.addEventListener("change", handleFiles); 
    
                
    colorrange = document.createElement("input");
    colorrange.type="color";
    document.getElementById("tabelka").appendChild(colorrange);
    document.getElementById("tabelka").appendChild(reloadbutton);
    document.getElementById("tabelka").appendChild(refreshbutton);
    document.getElementById("tabelka").appendChild(colorstocodebutton);
    codearea = document.createElement("textarea");
    codearea.className="textareacode";
    colorstocodebutton.onclick=function(){convertcolorstocode(codearea);};
    previewbutton.onclick=function(){previewdiv(1);};
    document.getElementById("tabelka").appendChild(colorstocodebutton);  
    document.getElementById("tabelka").appendChild(previewbutton);
    
    document.getElementById("tabelka").appendChild(uploadlabel);
    document.getElementById("upllabel").innerHTML="加载BMP";
    document.getElementById("upllabel").appendChild(convertbmp);
    
    document.getElementById("tabelka").appendChild(document.createElement("br"));  
    document.getElementById("tabelka").appendChild(codearea);
    
    
   

    
    for (var j=0;j<numberoflines.value;j++)
    {
        (function(objetr)
        {
            objetr = document.createElement('tr');
            objetr.id="r"+j;
            document.getElementById('divki').appendChild(objetr);
            for (var i=0;i<numberofcolumns.value;i++)
            {
                (function(obj)
                {
                    obj = document.createElement('td');
                    obj.id="d"+i;
                    obj.style.backgroundColor="white";                             
                    obj.onclick = function (){ return funkcja3(obj);};
                    obj.onmouseover = function (){ return funkcja2(obj);};                                
                    document.getElementById(objetr.id).appendChild(obj);
                }(i));
            }
        }(j));
    }
} 
function handleFiles()
{    
    var carray=document.getElementById("divki");
    var reader = new FileReader();
    
    reader.onload = function(e)
    {
        var arrayBuffer = reader.result;
        var db=new DataView(arrayBuffer);
        var objekt;
        var obj;
        var k=0;
        var p=0;
        
        var liczbapad=db.getUint8(18)%4;
        var szerokosc=((db.getUint8(18)+(db.getUint8(19)*16*16))*3)+liczbapad;
        var wysokosc=db.getUint8(22)+(db.getUint8(23)*16*16);

        for (var i=(db.byteLength-szerokosc);i>53;i=i-szerokosc)
        {       
            p=0;
                for (var j=0;j<(szerokosc-liczbapad);j=j+3)
                {                                       
                    carray.rows[k].cells[p].style.backgroundColor="#"+decimalToHexString(db.getUint8(i+j+2))+decimalToHexString(db.getUint8(i+j+1))+decimalToHexString(db.getUint8(i+j)); 
                    //document.write("#"+decimalToHexString(db.getUint8(i+j+2))+decimalToHexString(db.getUint8(i+j+1))+decimalToHexString(db.getUint8(i+j)));
                    p++;
                }  
            k++;
        }
    };
 
    reader.readAsArrayBuffer(document.getElementById('filebrowsed').files[0]);
}
function decimalToHexString(number)
{
   // if (number < 0)
    //{
    //	number = 0xFFFFFFFF + number + 1;
    //}
    if (number<16) return "0"+number.toString(16).toUpperCase();
    if (number==0) return "00";

    return number.toString(16).toUpperCase();
}

function previewdiv(typeofarray)
{
    pop("allblac");
    var canvas = document.getElementById('can');
    var iksy=numberofcolumns.value;
    var igreki=numberoflines.value;
    var krok=700/(Math.max(iksy,igreki));

    if (canvas.getContext){
    var c = canvas.getContext('2d');
    for (var i=0;i<iksy;i++)
    {
        for (var y=0;y<igreki;y++)
        {   
            switch(selectedarray.selectedIndex)
            {
            case 0:
                if (blackorwhite(i,y)==1) c.fillStyle = "white";
                else c.fillStyle = "black";              
            break;
            case 1:
                if (blackorwhite(i,y)==1) c.fillStyle = "white";
                else c.fillStyle = "black";
                break;
            case 2:
                if (blackorwhite(i,y)==1) c.fillStyle = "white";
                else c.fillStyle = "black";
                break;
            case 3:
                var average=0;
                var pomoc=convertColor(document.getElementById("divki").rows[y].cells[i].style.backgroundColor);
                for (var h=0;h<3;h++)
                    {
                        if (pomoc[h]==undefined) {pomoc[h]=255;}
                        average+=pomoc[h];                      
                    }
                average=average/3;                     
                average=Math.round(average);
                c.fillStyle = "#"+decimalToHexString(average)+decimalToHexString(average)+decimalToHexString(average);   
                    
                break;
            case 4:
                c.fillStyle = document.getElementById("divki").rows[y].cells[i].style.backgroundColor;
                break;
            }
            //TODO: dodać konwersje kolorków oraz zeby popup wyjebywało na środku ekranu
            
            c.fillRect(krok*i,krok*y,krok,krok);            
        }
    }   
}
}
function pop(div)
{
    document.getElementById(div).style.display = 'block';
}
function hide(div)
{
    document.getElementById(div).style.display = 'none';
}