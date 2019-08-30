const levels = {
  start:  {
    map: `0*)1! ;!!;!";!#;!$M"$5#$5$$5%$5&$5'$>'%;'&;'#;'";'!?($5)$5*$#+#3*%3*#6+%6+$*##%$#*""* %D* D)&D !D*'I#&I &I*!I% I&%J #J)"J# J%#I%%D$"D"#H&#K(!7('*&&*(&F&'E''3"%&$'& "& $&!%&!&& '&"&&%'&%&&$&&$%&#%&(%&)%&*&&+&&+'&)'&)#&(#&("&*"&+"&+!&+ &)!&) &( &' && &&"&%"&$!&$ &#!&"!&" &#"&  & (&$(&%(&&(&'(&((&)(&#(2"'2#'3!'3"(6!(6%!Q&!&`,
    navigation: {
      mansionOuter: [10, 4],
      shopDownstairs: [3, 3]
    },
    playerStart: {
      mansionOuter: [9, 4],
      shopDownstairs: [3, 4]
    }
  },
  mansionOuter: {
    map: `0*)1*(&'(&%(&#(&"(&%'&"$&!#&!'&!&& (& && $& "&! &% &# & !&!!&)&&)(&)'&' &''&((&(&&&'&$'&"'&#&&$&&%&&'&& %5!%5"%5#%5$%5%%L%$;%#;%""$#3"#3""3$"3"!3$!3&!3'"3'#3&"3&#3&$3(#3($3'%3)$3)"3)!3" 3%!*&%*)%*)#*) *'!*( I$ I #I('I$(I 'I&(J!$J  J#'J!(J&&D#$D& D!"D"&E(%E'$F$$K("R#"&##&#!E(!&`,
    navigation: {
      start: [-1, 5],
      mansionInner: [5, 2],
      water: [8, 2]
    },
    playerStart: {
      start: [0, 5],
      mansionInner: [5, 3],
      water: [8, 1],
    }
  },
  mansionInner: {
    map: `0*)1 (&!(&$(&((&)(&)'& '&!&&(&&)%&!%& #& $&($&)#&!#& "&)"&& &# &$ &! &!!&( &(!&"'S#'S$'S&'S''S'&S'%S'$S'#S'"S'!S&!S%!S$!S#!S"!S""S"#S"$S"%S"&S%'U&"G%$:#"T) J)$J('J#(J &J!"J  J' I(#I&(I!$I("*)&* %*" *(%3'(3"(3% 3)!6!'6 !6%(;$"'%"'%#'$#'##'#$'#%'#&'$$'$%'$&'%&'%%'&&'&%'&$'&#'`,
    navigation: {
      mansionOuter: [5, 9]
    },
    playerStart: {
      mansionOuter: [5, 8],
    }
  },
  water: {
    map: `0*)1 (V!(V"(V#(V$(V%(V('V)(V((V'(V&(V&'V)'V''V&&V#&V!&V*&V"'V$'V%'V#'V!'V$&V(&V)&V'&V%&V"&V 'V &V %V!%V)%V)$V'$V&$V%$V#$V$$V!$V $V&#V'#V)#V*#V*"V)"V'"V&"V%#V$#V##V!#V #V "V!"V#"V%"V$"V !V!!V#!V'!V  V* V) V( V' V& V% V$ V# V$!V%!V&!V" ;"!;"";"#;"$;"%M#%5'%5(%L($;(#;(";(!<)!5! V%%)$%)&%)`,
    navigation: {
      mansionOuter: [2, -1]
    },
    playerStart: {
      mansionOuter: [2, 0]
    }
  },
  shopDownstairs: {
    map: `0*)1"'S#'S$'S&'S''S('S(&S(%S($S(#S("S(!S'!S&!S%!S$!S#!S"!S""S"#S##S$#S$$S$%S#%S"%S"&S#"4%'U'(J)$J$ J %J!(J$(I"$I  I) I)"D)'D!"D$"'&"'%"'%#'&#''#''$'%$'%%'&%''%''&'&&'%&'$&'#&'&$8'"'! &" &# &!!& !& "& #&!#&!$& $&#$&!%&!&&!'& && '& (&"(&#(&&(&((&)(&)&&)%&)#&)!&( &' && &% &%(;`,
    navigation: {
      start: [5, 7],
      shopUpstairs: [3, 2]
    },
    playerStart: {
      start: [5, 6],
      shopUpstairs: [4, 2]
    }
  },
  shopUpstairs: {
    map: `0*)1"'S#'S$'S&'S''S('S(&S(%S($S(#S("S(!S'!S&!S%!S$!S#!S"!S""S"#S##S$#S$$S$%S#%S"%S"&S'(J)$J$ J %J!(J$(I"$I  I) I)"D)'D!"D$"'%"'%#'&#''#''$'%$''&'&&'%&'$&'#",&%R%'S'"G&"''%+&$'#&T%%'! &" &# &% && &' &( &)!&)#&)%&)&&)(&((&&(&%(&#(&"(& (& '& &&!'&!&&!%&!$& $&!#& #& "& !&!!&#$&`,
    navigation: {
      shopDownstairs: [3, 2],
      fire: [6, 5]
    },
    playerStart: {
      shopDownstairs: [4, 2]
    }
  }
}

function getLevel(key) {
  let b = levels[key].map
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
