const imglist = 'https://telegra.ph/file/8bd4816b5ed78b2da5bc5.jpg'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => conn.sendFile(m.chat, imglist, 'darkman.jpg', `
❆╼━━❆ •﹝📜﹞• ❆━━╾❆

*❮ اهلا بك/ي في اوامـر بوت 'رافـاييـل'🤖 ❯*

*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏👑˹ قـسـم الـمـجـمـوعـات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❦↜╎.منشن』*
*『❦↜╎.لمنشن』*
*『❦↜╎.مخفي』*
*『❦↜╎.الاداره』*
*『❦↜╎.طرد』*
*『❦↜╎.ترقيه』*
*『❦↜╎.خفض』*
*『❦↜╎.حذف』*
*『❦↜╎.جروب』*
*『❦↜╎.جروبي』*
*『❦↜╎.انذار』*
*『❦↜╎.رفع-انذار』*
*『❦↜╎.الانذارات』*
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏🎴˹ قـسـم الـتحـويـل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❦↜╎.ملصق』*
*『❦↜╎.حقوق』*
*『❦↜╎.لفيديو』*
*『❦↜╎.لصوت』*
*『❦↜╎.لصورة』*
*『❦↜╎.دائري』*
*『❦↜╎.اکتب』*
*『❦↜╎.اتتب』*
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏🔧˹ قـسـم الـأداوات╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❦↜╎.خط』*
*『❦↜╎.بارکود』*
*『❦↜╎.لرابط』*
*『❦↜╎.انطق』*
*『❦↜╎.ترجمة』*
*『❦↜╎.المزید』*
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏🕹️˹ قـسـم التـرفـیــه╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❦↜╎.إكس』*
*『❦↜╎.حذفإکس』*
*『❦↜╎.البینغ』*
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏🔍˹ قـسـم البـحـث╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❦↜╎.يوتيوب』*
*『❦↜╎.بينترست』*
*『❦↜╎.صورة』*
*『❦↜╎.جوجل』*
*『❦↜╎.ويكيبيديا』*
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏📥˹ قـسـم التحـمـيل╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❦↜╎.درایف』*
*『❦↜╎.یوتیوب2』*
*『❦↜╎.تيكتوك』*
*『❦↜╎.انستا』*
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*
*˼‏👥˹ قـسـم الاعـضــاء╿↶*
*⋄━───═◞⬪⋇⬪◟═───━⋄*
*『❦↜╎.الله』*
*『❦↜╎.قران』*
*『❦↜╎.بوت』*
*『❦↜╎.مساعدة』*
*『❦↜╎.المطور』*
*『❦↜╎.بروفایل』*
*『❦↜╎.اختفاء』*
*『❦↜╎.اقتباس』*
*『❦↜╎.تسجيل』*
*『❦↜╎.الدعم』*
*• ∙ ∙━━╍━﹝🌀﹞━╍━━∙ ∙ •*

*بــــــℝ𝔸ℙℍ𝔸𝔼𝕃ــــــوت*

❆╼━━❆ •﹝📜﹞• ❆━━╾❆
`.trim(), m)
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'allmenu','المهام','المهمات','ليست','مهام'] 

export default handler
