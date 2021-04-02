export default [
    {
        //1
        question: 'Pour tout a de]0 ;π[ on a :  lim┬(t→a)  1/tcost=1/asina ',
        questionAR: 'لكل a من المجال ]0 ;π[ , لدينا : lim┬(t→a)  1/tcost=1/asina',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },

    {
        //2
         question: 'Toute fonction continue sur un intervalle I n’est  pas forcément monotone sur I .',
         questionAR: 'كل دالة متصلة على مجال  I ليست بالضرورة رتيبة على نفس هذا المجال : ',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 1
    },    
    {
        //3
        question: 'Pour tout réel m de l’intervalle]-2 ;2[, l’équation x³-3x = m admet une seule solution ',
        questionAR: 'لكل عدد حقيقي m ينتمي للمجال , ]-2 ;2[ المعادلة x³ - 3x = m \n' +
            'تقبل حلا وحيدا\n',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],   
        correct: 2
    },    
    {
        //4
        question: 'f est continue sur [a ;b] si f est continue en tout point de [a ;b] et continue à droite en a et à droite en b ',
        questionAR : 'f دالة متصلة على مجال  [a ; b]إذا كانت f متصلة في أي نقطة من المجال [a ;b] و متصلة  على اليمين في a و على اليمين في b',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //5
        question: 'L’équation tan x = 27 admet une unique solution sur l’intervalle ]-π/2  ;  π/2[',
        questionAR : 'الدالة  tan x = 27 تقبل حالاً وحيداً على المجال ]-π/2  ;  π/2[',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 1
    },
    {
        //6
        question: 'Soient f et g deux fonctions définies sur un intervalle ouvert I et x₀ ∈ I\n' +
            'Si (∀ x ∈ I) : f(x)> g( x  )\n' +
            'et (〖 lim〗⁡〖f(x)〗=)┬(x→x₀)  l  et (〖 lim〗⁡〖g(x)〗=)┬(x→x₀)  l\' alors :\n',
        questionAR: "لتكن f و g دالتين معرفتين على مجال مفتوح I و x تنتمي للمجال I\n" +
            "إذا كان (∀ x ∈ I) : f(x)> g( x  )\n" +
            "و (〖 lim〗⁡f(x)=)┬(x→x^0 )  l  et (〖 lim〗⁡g(x)=)┬(x→x^0 )  l^'\n" +
            "إذن \n",
        answers: [
            'l = l’    ',
            'l <  l’   ',
            'l > l’    ',
            'l ≥ l’    '
        ],    
        correct: 4
    },
    {
        //7
        question: 'La fonction f : x→√x',
        questionAR : 'الدالة    f : x→√x',
        answers: [
            'Est continue à droite en (متصلة على اليمين في) 0',
            'Est continue sur (متصلة على)  [0 ; +∞[/  ',
            'Est continue sur (متصلة على) ]- ∞;0]',
            'd)\tN’est pas continue (غير متصلة)'
        ],    
        correct: 2
    },
    {
        //8
        question: 'Soit f la fonction définie par : f(x)=√(x^³ (x²-1))',
        questionAR : 'لتكن f الدالة المعرفة كما يلي:f(x)=√(x^³ (x²-1))',
        answers: [
            'f  n’est pas continue (غير متصلة) en 0',
            'f admet une limite en (تقبل نهاية في) 0',
            'f est continue en (متصلة في) 0',
            'f n’admet pas de limite en (لا تقبل نهاية في) 0'
        ],
        correct: 4
    },
    {
        //9
        question: ': L’image de l’intervalle [0 ; 4] par la fonction  f: x→3x-√x : est l’intervalle [0 ; 6]',
            questionAR : 'صورة المجال [0,4] بالدالة   f: x→3x-√x \n' +
                'هو المجال  [0 ; 6]\n',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //10
        question: ' √(√(√(5 )) )  = ∛5',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //11
        question: 'Si g est une fonction continue et strictement \n' +
            'Croissante sur ]a,b[ alors :\n',
            questionAR : 'إذا كانت f دالة متصلة و تزايدية قطعا على ]a,b[  إذن:',
        answers: [
            "La fonction (الدالة) g  ̄¹ est continue sur (متصلة على)  g(]a ;b[)",
            'La fonction (الدالة)  g  ̄¹ est définie sur (معرفة على) ]lim┬(x→a˖)⁡〖g(a) ;〗   lim┬(x→b  ̄)⁡〖g(b)[〗',
            'L’équation (المعادلة) g(x)=0 admet une unique solution dans(تقبل حلا وحيدا على)  ]a ;b[ ',
            "La fonction (الدالة)   g  ̄¹ est strictement décroissante sur (تناقصية قطعا على) g(]a ;b[)",
        ],
        correct: [1,2]
    },
    {
        //12
        question: 'Soit la fonction f définie sur R par :\n' +
            '     f(x)=√(x-2)   ;  Si x≥2\n' +
            '     f(x)= x²+kx+1 ;  Si  x<2\n' +
            'il existe deux valeurs de k pour laquelle f est continue au point 2\n',
            questionAR : ". لتكن f دالة معرفة على R بما يلي: f(x)=√(x-2)   ;  Si x≥2 | f(x)= x²+kx+1 ;  Si  x<2",
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //13
        question: 'Soit la fonction f définie sur R par :\n' +
            '          f(x)=x²+2x ;  x≤1\n' +
            '     f(x)=a  sin⁡〖(x-1)〗/(x-1); x>1\n' +
            ' la valeur de a pour que f soit continue en 1\n',
        questionAR:'لتكن الدالة f المعرفة على R بما يلي:       f(x)=x²+2x ;  x≤1\n' +
            '     f(x)=a  sin⁡〖(x-1)〗/(x-1); x>1\n',
        answers: [
            'a= 0',
            'a= 3',
            'a= -3',
            'a= 1'
        ],
        correct: 2
    },
    {
        //14
        question: 'l’équation x³+x²+x+2=0\n' +
            ' Admet dans R\n',
            questionAR : 'المعادلة x³+x²+x+2=0 تقبل في R ',
        answers: [
            'Une seule solution || حل وحيد',
            'Deux solutions || حلان اثنان',
            'Trois solutions || ثلاث حلول',
            'Quatre solutions || أربعة حلول'
        ],
        correct: 1
    },
    {
        //15
        question: 'Soit f  la fonction définie  par\n' +
            ' f(x)=-x+2   pour  x<3\n' +
            'f(x)=x-4   pour 3 ≤ x≤5\n' +
            'f(x)=-2x+13   pour  x>5\n',
        questionAR : 'لتكن f دالة معرفة بما يلي ',
        answers: [
            'f continue seulement en 3 / متصلة فقط في 3',
            'f continue seulement en 5 / متصلة فقط في 5',
            'f continue sur (متصلة على ) R',
            'f continue (متصلة على R ) sur ]- ∞;5[ U]5;+∞['
        ],
        correct: 4
    },
    {
        //16
        question: 'la fonction f : x→¬ | x²-4|',
        questionAR : 'الدالة   f : x→¬ | x²-4|',
        answers: [
            'Est Continue sur (متصلة على)  ]- ∞;-2] et [2;+∞[ ',
            'Est non continue en (غير متصلة في) 2' ,
            'Est non continue en (غير متصلة في) -2',
            'Est continue en (متصلة في)  R'
        ],
        correct: 4
    },
    {
        //17
        question: 'lim┬(t→0)  cos²t/t=1',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //18
        question: 'la fonction f  définie sur [2 ; +∞[Par\n' +
            '        f(x)=  1/(x-1) ; si x >2\n' +
            '        f(2)=1\n' +
            ' n’est pas continue en 2\n',
        questionAR : 'الدالة f المعرفة على R بما يلي:   ',
         answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //19
        question: 'soit f  une  fonction définie par f(x)=  (x²-2x+3)/(2|x+1|-5)',
            questionAR : 'لتكن الدالة f معرفة بما يلي: f(x)=  (x²-2x+3)/(2|x+1|-5)',
        answers: [
            'Df   = R',
            'Df   = R*',
            'Df   = R – {-7/2  ;3/2}',
            'Df   = R –{5}'
        ],
        correct: 3
    },
    {
        //20
        question: 'Soit f une fonction numérique définie sur un intervalle ouvert I et a un élément de I . si f est continue en a , alors f est dérivable en a .',
        questionAR : 'لتكن f دالة عددية معرفة على المجال المفتوح I و-a جزء ينتمي إلى I\n' +
            ' اذا كانت f دالة متصلة في a، إذن f قابلة للإشتقاق في  a\n',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //21
        question: 'Soit g la fonction définie sur ]- ∞;0]par\n' +
            'لتكن g دالة معرفة على ]- ∞;0] بما يلي:\n' +
            '       g (x)=√(x²-2x)/(x-3)\n' +
            'soit (Cg) sa courbe représentative dans un repère du plan .\n' +
            'ليكن Cg المنحنى التمثيلي ل g في معلم في المستوى\n' +
            '(Cg) admet une asymptote d’équation y=x\n' +
            'Cg يقبل  مقاربًا معادلته X=Y \n',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //22
        question: 'soit f  une fonction définie par\n' +
            '   f(x)=x^5+ 2 x\n' +
            '   On a :\n',
            questionAR : "لتكن الدالة f معرفة بما يلي:    f(x)=x^5+ 2 x",
         answers: [
            'lim┬(n→+∞)⁡〖f(x)=〗 +∞',
            'lim┬(n→-∞)⁡〖f(x)=〗  -∞',
            'lim┬(n→+∞)⁡〖f(x)=〗 -∞',
            'lim┬(n→-∞)⁡〖f(x)=〗  +∞'
        ],
        correct: 1
    },
    {
        //23
        question: 'f   ̄¹ est dérivable en f(x₀) si :',
        questionAR:'f   ̄¹قابل للإشتقاق في f (x₀) إذا' ,
        answers: [
            'f  est dérivable en (قابل للإشتقاق في)  x₀',
            ' f’(x₀) ≠0',
            'f  est dérivable en (قابل للإشتقاق في) x₀ et f’(x₀) ≠0',
            'f’(x₀) =0'
        ],
        correct: 3
    },
    {
        //24
        question: 'Si x=ln⁡(3^2/2^3 )-4 ln⁡(√3)alors x=ln8',
            questionAR : 'إذا كانت x=ln⁡(3^2/2^3 )-4 ln⁡(√3) إذن x=ln8',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //25
        question: 'e^(-2ln⁡5) est égale à (يساوي) ',
        answers: [
            '1/25',
            '-25',
            '25',
            '5/2'
        ],
        correct: 1
    },
    {
        //26
        question: 'lim┬(n→∞)⁡〖ln⁡(n+1)-ln⁡(n+2)=0〗',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 1
    },
    {
        //27
        question: 'ln (1-x) ≥1 est équivalent àيكافئ  )) ',
         answers: [
            'x≤1-e',
            'x <0',
            'x  > -e',
            'x≥1-e'
        ],
        correct: 1
    },
    {
        //28
        question: 'l’ensemble de solutions de l’équation ',
        questionAR : 'مجموعة حلول المعادلة: 2ln(x) = ln(2x+3) est   ',
         answers: [
            'L’ensemble vide / المجموعة الفارغة',
            '{3}',
            '{-1 ;3}',
            '{1 ;3}'
        ],
        correct: 2
    },
    {
        //29
        question: 'Soit (U n) la suite définie par \n' +
            '∀ n ∈N* :\nU n  = 1 + 1/2 +……+ 1/n+ln⁡(n)   alors',
            questionAR : 'لتكن المتتالية (U n) ∀ n ∈N  المعرفة بما يلي :U n  = 1 + 1/2 +……+ 1/n+ln⁡(n)   alors',
        answers: [
            '(U n) est positive et croissante  و تصاعدية  موجبة و',
            '(U n) est décroissante / تناقصية',
            '(U n) est majorée / مكبورة ',
            '(U n) est minorée / مصغورة'
        ],
        correct: 1
    },
    {
        //30
        question: 'lim┬(n→+∞)  sin/(ln⁡(n+1)) n’existe pas (غير موجودة)',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 1
    }
]