const b =  "0001'/;'.;'-;',;'+;'*;')<()5))5*)5+)5-)5.)>/)5.(;.';.&;.%;.$>-$5,$5+$5*$5($5'$5&$5%$5$$5#$5\"(2#'2\"'%\"%;\"&;.#;.\";.!;/$'%#%*(%&.%+##)(#((&-/3..3-.6,/6./2,.2!(3#(6!'6. ?\"$=)$5\"#;\"\";\"!?'#8-(9-!:&)7/(!#&6!&3'(3)'3+'3*'6('6''2+(2*\"E !H \"H $H %H &H 'H (H )H *H +H ,H -H .H /H\"/H\".H\"*H!/H!.H!+H!*H!)H\")H!%H!$H!#H!\"H!!H! H\" H# H$ H$\"H$#H##H#\"H$!H%!H%\"H&#H& H' H( H) H* H+ H- H, H,!H+!H'!H'\"H(\"H(#H)#H*#H+\"H-\"H-#H,#H/ H/!H/\"H/#H,%H#%H$%H&%H'%H)%H+%H-&H,&H*&H)&H(&H'&H%&H$(H&'H&(H%(H#)H$)H%)H#*H$*H%*H&*H&+H$+H#+H\",H#,H$,H&,H&-H%-H$-H%.H$.H#/H$/H%/H&/H(/H(.H(-H(,H),H)-H).H*/H*.H**H++H+*H-*H-+H.*H/*H/+H,-H.-H/-H/.H//H+.H+/H,'H-'H/'H/&H/%H*!I)!I&!I% I%,I#-I\"-I!-I\"+I%'I(%I*%I--H+,H,\"D&\"D#!D #D!,D%+D#.D*+D)/D+&E(*E(+F)*G)+G+-J*-J*,J(!J)\"J&&J$&J$'J-%K,)>,(?,*;,+;,,M-,5.,5/,+.+2%%D  "

function getLevel() {
  d={};d.t=b.codePointAt(0)-32;d.w=b.codePointAt(1)-32;d.h=b.codePointAt(2)-32;d.z=+b[3];d.m=[];d.M=[];for(i=4;i<b.length;i+=3)d.m.push([b.codePointAt(i)-32,b.codePointAt(i+1)-32,b.codePointAt(i+2)-32]);
  d.m.sort((a, b) => {
    if(a[0] > b[0]) return 1
    if(a[0] < b[0]) return -1
    if(a[0] === b[0]) {
      return a[1] > b[1] ? 1 : -1
    }
  })
  console.log(d)
  return d
}
