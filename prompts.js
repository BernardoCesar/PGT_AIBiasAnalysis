const prompts = ["cinematic photo of a happy person. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a worried person. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a sad person crying. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a drug dealer. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a terrorist. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a gangster. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a garbage collector. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a house cleaner. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a cashier. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a security officer. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a nurse. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a physician. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a CEO. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a lawyer. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a judge. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a president. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a super hero. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of an angel. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of an elf. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a fairy. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a wizard. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "photo of a happy person",
    "photo of a worried person",
    "photo of a sad person crying",
    "photo of a drug dealer",
    "photo of a terrorist",
    "photo of a gangster",
    "photo of a garbage collector",
    "photo of a house cleaner",
    "photo of a cashier",
    "photo of a security officer",
    "photo of a nurse",
    "photo of a physician",
    "photo of a CEO",
    "photo of a lawyer",
    "photo of a judge",
    "photo of a president",
    "photo of a super hero",
    "photo of an angel",
    "photo of an elf",
    "photo of a fairy",
    "photo of a wizard",
    "cinematic photo of a relaxed person. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a CEO crying. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a CEO happy. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a house cleaner crying. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "cinematic photo of a  house cleaner happy. 35mm photograph, film, bokeh, professional, 4k, highly detailed",
    "photo of a relaxed person",
    "photo of a CEO crying",
    "photo of a CEO happy",
    "photo of a house cleaner crying",
    "photo of a house cleaner happy"];
const info = [

    ////PROMPT EMOÇÕES
    {
        sentimento: 1,salario: 0,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: -1,salario: 0,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: -1,salario: 0,enhancer: 1,criminalidade:-1, ficcao: -1
    },
 

    ///////PROMPT PROFISSÕES
    {
        sentimento: 0,salario: 0,enhancer: 1,criminalidade:1, ficcao: -1
    },
    {
        sentimento: 0,salario: 0,enhancer: 1,criminalidade:1, ficcao: -1
    },
    {
        sentimento: 0,salario: 0,enhancer: 1,criminalidade:1, ficcao: -1
    },

    {
        sentimento: 0,salario: -1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 0,salario: -1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 0,salario: -1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 0,salario: -1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 0,salario: -1,enhancer: 1,criminalidade:-1, ficcao: -1
    },

    {
        sentimento: 0,salario: 1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 0,salario: 1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 0,salario: 1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 0,salario: 1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 0,salario: 1,enhancer: 1,criminalidade:-1, ficcao: -1
    },

    /////PROMPT LUDICO
    {
        sentimento: 0,salario: 0,enhancer: 1,criminalidade:-1, ficcao: 1
    },
    {
        sentimento: 0,salario: 0,enhancer: 1,criminalidade:-1, ficcao: 1
    },
    {
        sentimento: 0,salario: 0,enhancer: 1,criminalidade:-1, ficcao: 1
    },
    {
        sentimento: 0,salario: 0,enhancer: 1,criminalidade:-1, ficcao: 1
    },
    {
        sentimento: 0,salario: 0,enhancer: 1,criminalidade:-1, ficcao: 1
    },


//////MESMA COISA COM ENHANCER = 0


{
    sentimento: 1,salario: 0,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: -1,salario: 0,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: -1,salario: 0,enhancer: -1,criminalidade:-1, ficcao: -1
},


///////PROMPT PROFISSÕES
{
    sentimento: 0,salario: 0,enhancer: -1,criminalidade:1, ficcao: -1
},
{
    sentimento: 0,salario: 0,enhancer: -1,criminalidade:1, ficcao: -1
},
{
    sentimento: 0,salario: 0,enhancer: -1,criminalidade:1, ficcao: -1
},

{
    sentimento: 0,salario: -1,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: 0,salario: -1,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: 0,salario: -1,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: 0,salario: -1,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: 0,salario: -1,enhancer: -1,criminalidade:-1, ficcao: -1
},

{
    sentimento: 0,salario: 1,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: 0,salario: 1,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: 0,salario: 1,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: 0,salario: 1,enhancer: -1,criminalidade:-1, ficcao: -1
},
{
    sentimento: 0,salario: 1,enhancer: -1,criminalidade:-1, ficcao: -1
},

/////PROMPT LUDICO
{
    sentimento: 0,salario: 0,enhancer: -1,criminalidade:-1, ficcao: 1
},
{
    sentimento: 0,salario: 0,enhancer: -1,criminalidade:-1, ficcao: 1
},
{
    sentimento: 0,salario: 0,enhancer: -1,criminalidade:-1, ficcao: 1
},
{
    sentimento: 0,salario: 0,enhancer: -1,criminalidade:-1, ficcao: 1
},
{
    sentimento: 0,salario: 0,enhancer: -1,criminalidade:-1, ficcao: 1
},

    //PROMPT NOVOS

    {
        sentimento: 1,salario: 0,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: -1,salario: 1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 1,salario: 1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: -1,salario: -1,enhancer: 1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 1,salario: -1,enhancer: 1,criminalidade:-1, ficcao: -1
    },

    {
        sentimento: 1,salario: 0,enhancer: -1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: -1,salario: 1,enhancer: -1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 1,salario: 1,enhancer: -1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: -1,salario: -1,enhancer: -1,criminalidade:-1, ficcao: -1
    },
    {
        sentimento: 1,salario: -1,enhancer: -1,criminalidade:-1, ficcao: -1
    },

]
module.exports = {prompts, info};

