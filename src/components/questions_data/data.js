export default [
    {
        //1
        question: 'La fonction f définie sur R par :\n' +
            '        f(x) = x²+3x+3    ;x≤-1\n' +
            '       |f(x) = 2/(x²+1)                   ;x>1                   \n' +
            'f  n’est dérivable en 1\n',
        questionAR: 'الدالة f المعرفة على المجال  R ب :\n' +
            '        f(x) = x²+3x+3    ;x≤-1\n' +
            '       |f(x) = 2/(x²+1)                   ;x>1                   \n' +
            'غير قابلة للاشتقاق  في         1\n',
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
        question: 'La suite (Un) définie sur N par Un =n/2^(n+1) \n' +
            'est croissante\n',
        questionAR: 'المتتالية المعرفة على N بما يلي Un =n/2^(n+1) تزايدية     ',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //3
        question: 'l’équation x⁸ = 5 admet huit solutions dans R',
        questionAR: 'المعادلة x⁸ = 5 \n' +
            'تقبل  8 حلول  \n',
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
        question: 'Soit  f   la fonction définie par : \n  f(x)=  (2x^2-x-1)/(1-x^3 )     ;x<1\n' +
            '       |f(x)=  x-  2/x     ; x≥1\n',
        questionAR : 'لتكن f الدالة المعرفة كما يلي \n' +
            '\n' +
            '                          f(x)=  (2x^2-x-1)/(1-x^3 )     ;x<1\n' +
            '       |f(x)=  x-  2/x     ; x≥1\n',
        answers: [
            'f  n\' est pas continue en (في  متصلة غير) 1\n',
            'f est  continue en (في  متصلة) R',
            'f  est continue en (في  متصلة) 1',
            'f n\' est pas continue en (في  متصلة غير) 0'
        ],
        correct: 3
    },
    {
        //5
        question: 'Soit (Un)  une suite numérique définie par : \n  ∀ n∈N :  Un=(n+(-1)^n(√n))/(2n+3)\n' +
            'Alors :\n',
        questionAR : 'متتالية معرفة كالتالي  (Un) لتكن   \n' +
            ' ∀ n∈N :  Un=(n+(-1)^n(√n))/(2n+3)\n',
        answers: [
            'Si (Un) est divergente ( متباعدة) ',
            '∀ n∈N : Un ≤0',
            'Si (Un) est bornée(محدودة) ',
            'la suite (Un) est croissante (تزايدية) '
        ],
        correct: 3
    },
    {
        //6
        question: 'Pour tout a ∈ ]0;1[ ; le domaine de définition de la fonction f(x)=ln⁡(∛((x-a)/(a^3-x))) est Df = [a³ ;a[',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //7
        question: 'la dérivée de la fonction f définie par \n          f (t) =   (2ln⁡(1+√(t)))/(1+√t) est:',
        questionAR : '   الدالة المشتقة للدالة  f  المعرفة بما يلي هي' +
            '         f (t) =   (2ln⁡(1+√(t)))/(1+√t) :\n',
        answers: [
            'f’ (t) =   (1- ln⁡(1+√(t)))/(√t(1+√(t)))',
            'f’ (t) =   (1- ln⁡(1+√(t)))/(2(1+√(t)) ²)',
            'f’ (t) =   (1- ln⁡(1+√(t)))/(√t(1+√(t)²))',
            'f’ (t) =   (1- ln⁡(1+√(t)))/(√t(1+t)²)'
        ],
        correct: 3
    },
    {
        //8
        question: 'Soit f la fonction définie par :\t\n' +
            '\tf(x)= ∛(x^4-2x^2+2) \n' +
            'on a :\n',
        questionAR : 'لتكن f الدالة المعرفة كما يلي\n' +
            'f(x)= ∛(x^4-2x^2+2)\n',
        answers: [
            'f est continue en ( متصلة في)  sur R',
            'fn’est pas continue  (غير متصلة في)sur R',
            'f est continue et strictement décroissante (متصلة و تناقصية قطعا في) sur R',
            'f est décroissante  (تناقصية في) sur R'
        ],
        correct: 1
    },
    {
        //9
        question: 'U\'U^n a pour primitive ',
        questionAR : 'U\'U^n الدالة الاصلية ل\t',
        answers: [
            '1/n  U^(n+1)',
            'nU^(n+1)',
            '1/(n+1)  U^(n+1)',
            'n²U^(n+1)'
        ],
        correct: 3
    },
    {
        //10
        question: '√(√(√(√(77 )) ) )  = ∜77',
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
        question: 'l’équation de la tangente à la courbe de la fonction : \n f(x)=x√(4-x²)',
        questionAR : 'معادلة المماس لمنحنى الدالة \n' +
            ' f(x)=x√(4-x²)\n' ,
        answers: [
            'y=4x',
            'y=2x',
            'y=3x',
            'y=x'
        ],
        correct: 2
    },
    {
        //12
        question: 'l\' équation cos⁡(x)+1/2=1 admet sur ]0 ;π/3[ :',
        questionAR : 'المعادلة cos⁡(x)+1/2=1 تقبل على ]0 ;π/3[ ' ,
        answers: [
            'deux solutions (حلين إثنين)',
            'trois solutions (ثلاثة حلول)',
            'une seule solution (حل واحد)',
            'n’a pas de solution (ليس لديها حل)'
        ],
        correct: 3
    },
    {
        //13
        question: 'Soit f la fonction définie par :\t f(x)=  x/(x+1) ∛(1+x²)',
        questionAR:'   f  الدالة المعرفة كما يلي  ' +
            'f(x)=  x/(x+1) ∛(1+x²)\n ',
        answers: [
            'lim┬(x→-∞)⁡〖f(x)= 0〗',
            'lim┬(x→-∞)⁡〖f(x)= 1〗  ',
            'lim┬(n→-∞)⁡〖f(x)= +∞〗',
            'lim┬(n→-∞)⁡〖f(x)= -∞〗'
        ],
        correct: 3
    },
    {
        //14
        question: 'Si la suite (Vn) n’est pas majorée elle diverge nécessairement vers +∞',
        questionAR : 'اذا كانت المتتالية غير مكبورة فهي متباعدة في+∞',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //15
        question: 'Soit f  la fonction définie par : \n f(x) =|x|√(x²-1)',
        questionAR : 'لتكن f دالة معرفة  بما يلي  \n' +
            '\n' +
            '                    f(x) =|x|√(x²-1)\n',
        answers: [
            'f  est impaire (فردية)sur Df',
            'f est paire (زوجية) sur Df',
            'f est croissante (تصاعدية )sur Df',
            'f est décroissante (تنازلية) sur Df'
        ],
        correct: 2
    },
    {
        //16
        question: 'Soit f  la fonction f : x→6x^(2/3)-4x\n' +
            'f est dérivable sur R*+ et sa dérivée :\n',
        questionAR : 'الدالة f : x→6x^(2/3)-4x   تقبل  الاشتقاق و مشتقتها على R*+',
        answers: [
            '4((1-∛x)/∛x)',
            '(1-∛x)/∛x' ,
            '3((1-∛x)/∛x)',
            '2((1-∛x)/∛x)'
        ],
        correct: 1
    },
    {
        //17
        question: 'lim┬(x→+∞)  1/2 x-√(x-1)=0',
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
        question: 'La dérivée de la fonction  f définie sur\n' +
            ' [-1 ; +∞[ par : f(x)= √(x+1)-x+3 est :\n',
        questionAR : 'الدالة المشتقة ل f و المعرفة في  [-1 ; +∞[\n' +
            'بما يلي f(x)= √(x+1)-x+3 هي\n',
        answers: [
            'f\' (x)=(1-2√(x+1))/(2√(x+1))',
            'f\' (x)=(3-2√(x+1))/√(x+1)',
            'f\' (x)=1/(2√(x+1))',
            'f\' (x)=√x/(2√(x+1))'
        ],
        correct: 1
    },
    {
        //19
        question: 'Soit f  une  fonction définie par\n' +
            '      f(x)= √((1-lnx)/(1+lnx))\n' +
            'On a :\n',
        questionAR : 'لتكن الدالة f معرفة بما يلي: \n' +
            '   f(x)= √((1-lnx)/(1+lnx))\n',
        answers: [
            'Df   = R',
            'Df   = R*',
            'Df   = ]1/e  ;e]',
            'Df   = R –{e}'
        ],
        correct: 3
    },
    {
        //20
        question: 'La fonction 4cosx n’a pas de primitive sur R',
        questionAR : ' الدالة 4cosx  لا تقبل دالة اصلية على R ',
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
        question: 'Soit A = 1/2 ln⁡(9/64)',
        answers: [
            'A= 2ln3 -3ln2',
            'A= ln2 -2ln3',
            'A= ln3 -3ln2',
            'A=3ln2 -2ln3'
        ],
        correct: 3
    },
    {
        //22
        question: 'ln⁡(x^2+3x+2)=ln⁡(2x+8)   n\'admet pas de solutions sur R',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //23
        question: 'lim┬(n→+∞) ln〖(x+1)/(x²+3x+2)〗=0',
        answers: [
            'Vrai / صحيح',
            'Faux / خطأ',
            '',
            ''
        ],
        correct: 2
    },
    {
        //24
        question: 'Soit f la fonction définie par f(x) =x√(x²+1)\n' +
            'F admet une fonction réciproque f^(-1) sur sur R\n',
        questionAR : 'f   الدالة معرفة بما يلي'+
        +'f(x) =x√(x²+1)'+
'تقبل دالة عكسيةf(-1) ',
answers:[
    'Vrai / صحيح',
    'Faux / خطأ',
    '',
    ''
],
    correct: 1
},
{
    //25
    question: 'Soit f la fonction définie par \n  f(x) =-1/2+1/4 x+√(x+2)\n' +
    'f est croissante sur [-2 ;+∞[\n',
        questionAR : 'معرفة بما يلي الدالة f    \nf   دالة معرفة بما يلي'+
    'f(x) =-1/2+1/4 x+√(x+2)'+
    'وتزايدية على [-2 ;+∞[',
    answers: [
    'Vrai / صحيح',
    'Faux / خطأ',
    '',
    ''
],
    correct: 1
},
{
    //26
    question: 'ln⁡(x²+2x)-ln⁡x≥0 \n' +
    'N’admet pas de solutions dans R\n',
        questionAR : 'ln⁡(x²+2x)-ln⁡x≥0 المتراجحة \n' +
'لا تقبل حلولا في R   ',
    answers: [
    'Vrai / صحيح',
    'Faux / خطأ',
    '',
    ''
],
    correct: 2
},
{
    //27
    question: 'L’ensemble de définition de la fonction'+
    'f(x)=〖log〗_2 (x)+〖log〗_x (2)est:',
    questionAR :  'مجموعة تعريف الدالة  f(x)=〖log〗_2 (x)+〖log〗_x (2) هو  ',
        answers: [
    'R',
    ']-∞;-1[∪]1 +∞[',
    'R*',
    'R+'
],
    correct: 2
},
{
    //28
    question: 'Soit 〖(Un)〗_(n≥1)la suite géométrique de premier terme U_1=2 et de raison  q= 1/3 alors :',
        questionAR :'لتكن〖(Un)〗_(n≥1) المتتالية الهندسية ذات الحد الاول'+
    'U_1=2 و q= 1/3',
    answers: [
        'pour tout n∈N*Un=1/3^(n-1) ',
        'pour tout n∈N*Un=2/3^(n-1) ',
        'pour tout n∈N*Un=4/3^(n-1) ',
        'pour tout n∈N*Un=5/3^(n-1) '
    ],
        correct: 2
},
{
    //29
    question: 'La limite de la suite نهاية المتتالية\n' +
    'Un= (2n²-3n+1)/(n+1) est هو:\n',
        answers: [
    'lim┬(n→+∞)⁡ Un= 0',
    'lim┬(n→+∞)⁡Un= +∞',
    'lim┬(n→+∞)⁡Un= 1',
    'lim┬(n→+∞)⁡Un= 2'
],
    correct: 2
},
{
    //30
    question: 'Si f est paire alors (Cf)admet l\' axe des \n' +
    'ordonées comme axe de symétrie \n',
        questionAR :'اذا كانت f دالة زوجية اذن(Cf) يقبل محور الاراتيب كمحور تماثل',
    answers: [
    'Vrai / صحيح',
    'Faux / خطأ',
    '',
    ''
],
    correct: 1
}
]