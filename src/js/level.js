const b = `0*)1! ;!!;!";!#;!$M"$5#$5$$5%$5&$5'$>'%;'&;'#;'";'!?($5)$5*$#+#3*%3*#6+%6+$*##%$#*""* %D* D)&D !D*'I#&I &I*!I% I&%J #J)"J# J%#I%%D$"D"#H&#K(!7('*&&*(&F&'E''3"%&$'& "& $&!%&!&& '&"&&%'&%&&$&&$%&#%&(%&)%&*&&+&&+'&)'&)#&(#&("&*"&+"&+!&+ &)!&) &( &' && &&"&%"&$!&$ &#!&"!&" &#"&  & (&$(&%(&&(&'(&((&)(&#(2"'2#'3!'3"(6!(6%!Q&!&`

function getLevel() {
  d={};
  d.t=b.codePointAt(0) -32;
  d.w=b.codePointAt(1) -32;
  d.h=b.codePointAt(2) -32;
  d.z=+b[3];
  d.m=[];
  d.M=[];
  for(let i =4; i < b.length; i+=3)
    d.m.push([b.codePointAt(i)-32,b.codePointAt(i+1)-32,b.codePointAt(i+2)-32]);

  d.m.sort((a, b) => {
    if(a[0] > b[0]) return 1
    if(a[0] < b[0]) return -1
    if(a[0] === b[0]) {
      return a[1] > b[1] ? 1 : -1
    }
  })
  return d
}
