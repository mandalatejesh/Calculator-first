let expr = document.getElementById("expression")
let history = document.getElementById("hist")

function zero(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "0"
}

function one(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "1"
}
function two(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "2"
}

function three(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "3"
}

function four(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "4"
}

function five(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "5"
}

function six(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "6"
}

function seven(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "7"
}

function eight(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "8"
}

function nine(){
    if(expr.innerText == "0")expr.innerText=""
    expr.innerText = expr.innerText + "9"
}
function add(){
    expr.innerText = expr.innerText + "+"
}

function sub(){
    expr.innerText = expr.innerText + "-"
}

function div(){
    expr.innerText = expr.innerText + "/"
}

function mult(){
    expr.innerText = expr.innerText + "*"
}

function clearFunc(){
    expr.innerText = "0"
}
function exe(){
    history.innerText = expr.innerText;
    let n1 = 0;
    let n2 = 0;
    let s = expr.innerText;
    let p = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]<'0' || s[i]>'9'){p=i;break;}
        n1 += (s[i]-'0');
        n1 *= 10;
    }
    n1 /= 10;
    let op = s[p];
    for(let i=p+1;i<s.length;i++){
        if(s[i]<'0' || s[i]>'9'){expr.innerText = "invalid";return;}
        n2 += s[i]-'0';
        n2 *=10;
    }
    n2 /= 10;
    switch(s[p]){
        case '+':
            expr.innerText = n1 + n2;
            break;
        case '/':
            if(n2==0){expr.innerText="error";break;}
            expr.innerText = n1 / n2;
            break;
        case '-':
            expr.innerText = n1 - n2;
            break;
        case '*':
            expr.innerText = n1*n2;
            break;     
    }

}
let pos = 10
function inc(){
    let item = document.getElementById("flow");
    pos = 1.2*pos;
    item.style.width = pos + 'px';
}
function myMove() {
  let id = null;
  const elem = document.getElementById("flow");
  let pos = 50;
  clearInterval(id);
  id = setInterval(frame, 5);
  let flag = 1;
  function frame() {
      if(pos==0){
          flag = 1;
      }
      if(pos==500){
          flag = 0;
      }
    if (flag==0) {
        pos--;
      elem.style.width = pos + 'px';

    } else {
      pos++;
      elem.style.width = pos + 'px';
    }
  }
}