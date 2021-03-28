export default [
    {
        question: 'Pour tout a de]0 ;π[ on a :  lim┬(t→a)  1/tsint=1/asina ',
        questionAR: ' لكل عنصر a من ]0 ;π[  لدينا lim┬(t→a)  1/tsint=1/asina',

        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 1
    },

    {
        question: 'Toute fonction continue sur un intervalle I est \n' +
            'Monotone sur I .\n',
         questionAR: 'كل دالة متصلة على مجال I هي رتيبة على نفس المجال : ',

         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },    
    {
        question: 'Pour tout réel m de l’intervalle]-2 ;2[, l’équation x³-3x = m admet trois solutions distinctes.',
        questionAR: 'المعادلة x³ - 3x = m  تقبل ثلاثة حلول مختلفة , لكل عدد حقيقي m ينتمي للمجال ]-2 ;2[',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],   
        correct: 1
    },    
    {
        question: 'Si f  est une fonction continue sur intervalle [a ; b] et f(a) et f(b) ont deux signes opposés alors l’équation f(x)=0',
        questionAR : 'إذا  كانت f دالة متصلة على مجال  [a ; b] و f(a) و  f(b) لهما إشارتين مختلفتين إذن المعادلة f(x)=0',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        question: 'L’équation tan x = 27 admet une unique solution sur l’intervalle]-π/2  ;  π/2[',
        questionAR : ' المعادلة tan x = 27  تقبل حلا وحيدا في المجال ]-π/2  ;  π/2[',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 1
    },
    {
        question: 'Soient f et g deux fonctions définies sur un intervalle ouvert I et x₀ ∈ I\n' +
            'Si (∀ x ∈ I) : f(x)g( x  )\n' +
            'et (〖 lim〗⁡〖f(x)〗=)┬(x→x₀)  I et (〖 lim〗⁡〖g(x)〗=)┬(x→x₀)  I\' alors :\n',
        questionAR: "لتكن f و g دالتين معرفتين على مجال مفتوح I و x تنتمي للمجال I إذا كان (∀ x ∈ I) : f(x)<g( x  ) و      (lim⁡〖f(x)〗=)┬(x→x₀)  I et (lim⁡〖g(x)〗=)┬(x→x₀)  I' اذن",
        answers: [
            'I = I’       ',
            'I < I’        ',
            'I > I’        ',
            'I ≤ I’   '
        ],    
        correct: 4
    },
    {
        question: 'La fonction E : x→E(x)',
        questionAR : 'لتكن الدالة E المعرفة كما يلي: x→E(x)',
        answers: [
            'Est continue à gauche en || متصلة على اليسار في 2',
            'Est continue à droite en 2 || متصلة على اليمين في 2',
            'Est continue en 2 || متصلة في 2',
            'Est continue sur [1 ;2[ || [1 ;2[ متصلة على المجال '
        ],    
        correct: [2,4]
    },
    {
        question: 'Soit f la fonction définie par :\t\n' +
            '\tf(x)=√(x^2 (x-1)) on a :\n',
        questionAR : 'لتكن f الدالة المعرفة كما يلي f(x)=√(x^2 (x-1))',
        answers: [
            'D f = [1 ; +∞[',
            'D f = {0} ∪[1 ; +∞[',
            'f est continue en 0 || f متصلة على 0',
            'f n’admet pas limite en 0 || f  لا تقبل نهاية في 0'
        ],
        correct: 4
    },
    {
        question: 'L’image de l’intervalle [0 ; 4] par la fonction :\n' +
            '  f: x→2x-√x est l’intervalle [0 ; 6]\n',
            questionAR : 'صورة المجال [0,4] بالدالة  f: x→2x-√x هو المجال [6,0]',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        question: ' √(√(√(2 )) )  = ∛2',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        question: ' Si f est une fonction continue et strictement \n' +
            'Croissante sur ]a,b[ alors :\n',
            questionAR : 'إذا كانت f دالة متصلة و تزايدية قطعا على ]a,b[  إذن:',
        answers: [
            "Est la fonction f  ̄¹ est continue sur f(]a ;b[) || الدالة العكسية f  ̄¹ متصلة على f(]a ;b[)",
            'La fonction f  ̄¹ est définie sur ]lim┬(x→a˖)⁡〖f(a) ;〗   lim┬(x→b  ̄)⁡〖f(b)[〗 ||  الدالة العكسية  f  ̄¹  معرفة على ]lim┬(x→a˖)⁡〖f(a) ;〗   lim┬(x→b  ̄)⁡〖f(b)[〗',
            'L’équation f(x)=0 admet une unique solution dans ]a ;b[  ||  المعادلة   f(x)=0  تقبل حلا وحيدا على ]a ;b[',
            "La fonction f  ̄¹ est strictement décroissante\n' Sur f(]a ;b[)\n || الدالة  f  ̄¹ تناقصية قطعا على f(]a ;b[)"
        ],
        correct: [1,2]
    },
    {
        question: 'Soit la fonction f définie sur R par :\n' +
            '     f(x)=√(x-2)   ;  Si x≥2\n' +
            '     f(x)= x²+kx+1 ;  Si  x<2\n' +
            'il existe une unique valeur de k pour laquelle f est continue au point 2\n',
            questionAR : ". لتكن f دالة معرفة على R بما يلي: f(x)=√(x-2)   ;  Si x≥2 f(x)= x²+kx+1 ;  Si  x<2",
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 1
    },
    {
        question: 'Soit la fonction f définie sur R par :\n' +
            '     f(x)=sin⁡2x/x ;  x>0\n' +
            '     f(x)=1-2x ; x<0\n' +
            '     f(0)=  2\n' +
            'est continue sur :\n',
        questionAR:'لتكن الدالة f المعرفة على R بما يلي:  f(x)=sin⁡2x/x ;  x>0  f(x)=1-2x ; x<0  f(0)=  2',
        answers: [
            'R',
            ']-∞ ;0[',
            '[-1 ; 2]',
            '[0 ;+∞['
        ],
        correct: [2,4]
    },
    {
        question: 'l’équation x³+x²+x+2=0\n' +
            ' Admet dans R\n',
            questionAR : 'المعادلة x³+x²+x+2=0  تقبل في R ',
        answers: [
            'Une seule solution || حل وحيد',
            'Deux solutions || حلان اثنان',
            'Trois solutions || ثلاث حلول',
            'Quatre solutions || أربعة حلول'
        ],
        correct: 1
    },
    {
        question: 'la fonction réciproque de la fonction f définie sur [0 ; +∞[ par f(x)=x²+1 est :',
        questionAR : 'الدالة العكسية على للدالة f المعرقة بما يلي: [0 ; +∞[ par f(x)=x²+1 هي ',
        answers: [
            'La fonction f  ̄¹ définie sur [1 ; +∞[ par f  ̄¹( x)= -√(x-1) || f  ̄¹( x)= -√(x-1) المعرفة على [1 ; +∞[',
            'La fonction f  ̄¹ définie sur ]1 ; +∞[ par f  ̄¹( x)= √(x-1) || f  ̄¹( x)= √(x-1) المعرفة على ]1 ; +∞[',
            'La fonction f  ̄¹ définie sur [1 ; +∞[ par f  ̄¹( x)= √(x-1) || f  ̄¹( x)= √(x-1) المعرفة على [1 ; +∞[',
            'Continue sur [1 ; +∞[  || متصلة عل [1 ; +∞['
        ],
        correct: [3,4]
    },
    {
        question: 'la fonction f : x→¬ | x²-1|',
        questionAR : ' الدالة f : x→¬ | x²-1|:',
        answers: [
            'Est Continue sur ]- ∞;-1] et [1;+∞[ || متصلة عل ]- ∞;-1] و [1;+∞[ ',
            'Est non continue en en 1 || غير متصلة في 1',
            'Est non continue en -1 || غير متصلة في -1',
            'Est continue en R || متصلة في R'
        ],
        correct: 4
    },
    {
        question: 'lim┬(t→0)  sin²t/t=1',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        question: 'la fonction f  définie sur [2 ; +∞[\n' +
            'Par   f(x)=  1/(x-1) ; si x >2\n' +
            '        f(2)=1\n' +
            'est continue en 2\n',
            questionAR : '. الدالة f المعرفة على [2 ; +∞[  كما يلي: f(x)=  1/(x-1) ; si x >2 f(2)=1 متصلة في 2  ',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 1
    },
    {
        question: 'soit f  et g deux fonctions définies par\n' +
            '   f(x)=〖(x+1)〗^(2/3)  et g(x)=∛((x+1)²)\n' +
            'On a :\n',
            questionAR : '. لتكن fوg دالتين معرفتين كما يلي f(x)=〖(x+1)〗^(2/3)  et g(x)=∛((x+1)²) ',
        answers: [
            'Df   = ]-1 ; +∞[',
            'Df   = [-1 ; +∞[',
            ' Dg  = R',
            'f = g'
        ],
        correct: 3
    },
    {
        question: 'soit f  une fonction définie par\n' +
            '   f(x)=x^8+ 2 x⁴\n',
        questionAR : 'لتكن :f دالة معرفة كما يلي  f(x)=x^8+ 2 x⁴ لدينا',
        answers: [
            'lim┬(n→+∞)⁡〖f(x)=〗 +∞',
            'lim┬(n→-∞)⁡〖f(x)=〗  -∞',
            'lim┬(n→+∞)⁡〖f(x)=〗 -∞',
            'lim┬(n→-∞)⁡〖f(x)=〗  +∞'
        ],
        correct: [1,4]
    }
]