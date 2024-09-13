/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
const docs = () => {};

// Bismillahi rohmani rohiym!
// Section 9, NesJS Lessons

// =================================================================

// 2024-08-12
// 95th Lesson
// NestJS va Zoo Rest API loyihasini birga quramiz

// Darsimiz rejasi:
// 1) NestJS o'zi nima?
// 2) NestJS muhim o'rinni egallagan NestJS Ingridientlari haqida gaplashamiz
// 3) NestJS'ning markaziy Module Decorator tushunchasi va uning tarkibiy qismlarini tahlil etamiz
// 4) NestJS'da Rest API hisoblanmish Zoo loyihasini birga tashkil etamiz

// ---------------------------------------------------
// Nestar loyihamiz aynan qay darajadagi talabalar uchun mo'ljallanganligini ko'rib o'tamiz.

// Nestar loyihasida, backend serverni nodeJS'ning nestJS frameworki orqalik hosil etganmiz
// Va biz Nestar loyihasida mukammal texnologiyalar hisoblanmish, GraphQL Architecture hamda MonoRepo project
// development asosida hosil etganmiz. Uning frontend'iga keladigon bo'lsak, ya'ni Nestar loyihamizning frontendi,
// meta-framework asosida qurilgan. Ya'ni Single Page Application'ning bir ajoyib meta-frameworki bu nextJS, va hamda biz
// nextJS'ni cache artchitecture orqalik hosil etganmiz. Ya'ni Nestar loyihasini boshlash uchun, o'quvchidan azaldan talab etiladigan bilim
// darajasi mavjud bo'ladi. Va bizning Nestar loyihamizni o'qiyotgan talabadan eng minimal holatda, oldingi nodeJS'ning expressJS framework'ida
// kamida bir nechta loyiha qilgan darajadagi bilim talab etiladi. Va hamda nodeJS'ning expressJS framework'ida typescript'ni qo'llagan holda
// ishlashni bilish talab etiladi Frontend uchun, eng minimalniy SPA'ni, oddiy usulda qura bilish, ya'ni reactJS library orqalik
// bir nechta loyihalarni qila olish natijasida, ortirilgan amaliy bilim talab etiladi. Shuning uchun Nestar loyihamizda, biz basic bilimlarga urg'u
// bermaymiz.

// ------------------------------------------------------------------------

// nestJS => progressive nodeJS framework
// nestJS => expressJS'ni ustida qurilgan framework hisoblanadi
// nestJS'ni Fastify orqalik ham qurishimiz mumkin. Lekin default holatda Express tavsiya etiladi.

// -----------------------------------------------------------------

// NestJS o'zi nima?
// 1) nestJS sa'marali, progressive (davomli), ishonchli va kengaytirilgan nodeJS bilan birga qo'llanib
// server-side application'larni qurish uchun ishlatiladigon framework hisoblanadi

// 2) nestJS TypeScript'ni to'laligicha qo'llab quvvatlaydi

// 3) nestJS OOP (Object Oriented Programming) (AOP (Aspect Oriented Programming)),
// Functional va Reactive Programming'larni birlashtiradi

// 4) nestJS MVC, DI, Middleware va Decorator Pattern (qoliplar)'lar uchun ham amal qiladi

// 5) nestJS o'zining NestJS CLI common line'ga ega

// ---------------------------------------------------------------------

// effecient => samarali va eng optimal yechim
// effective => natijali va eng optimal yechim bo'lmasligi ham mumkin

// progressive => siz nestJS'da biron bir oddiy loyihani boshlab, uni yetarlicha kerak bo'lgunga qadar kengaytirib
// borsangiz bo'ladi. Ya'ni keyinchalik turli xil package'larni install qilishimiz yoki turli extension'larni qo'shishimiz
// mumkin va turli xil mantiqlarni qo'shib borishimiz mumkin. Aynan shuning ma'nosi progressive degani.

// reliable => ishonsa bo'ladigan

// scalable => nestJS yozilgan loyihangizning loading'iga qarab istalgancha saceling qilishingiz mumkin. Bu gorizontal scaling yoki
// vertical scaling bo'lishi mumkin.

// OOP (AOP) => nestJS Object Oriented Programming tushunchasiga daxldor bo'lgan, Aspect Oriented Programming
// hisoblanadi. nestJS'ning kuchlik tarafi ham shunda.

// AOP => bu OOP'ning bir yo'nalishi hisoblanadi.

// AOP => nestJS loyihamizda moduler tizimini hosil qilish uchun xizmatga keladi.

// expressJS => Burak backend loyihasida to'liq OOP va qisman Functional Programming tushunchasi bilan ishlagan edik.

// ---------------------------------------------------------------------
// Architectural and Design Patterns:

// Dasturlashda pattern (qolip)'lar tushunchasi eng muhim tushunchalardan hisoblanadi.

// Biz Burak loyihamizda MVC va Middleware pattern'lardan foydalangan edik.
// Lekin Nestar loyihamizda MVC va Middleware'dan tashqari DI (Dependency Injection) architectural va Decorator Design
// pattern'larni ham qo'llaymiz.

// Nestar loyihamizda MVC va DI eng asosiy rolni ijro etmaydi.
// Asosiy rolni Decorator Design Pattern ijro etadi.

// Decorator Design Pattern => Nestar loyihamizda AOP'ning integratsiyasini amalga oshirish uchun
// xizmatga keladi. nestJS AOP'ning konseptsiyalarini bizning dekoretorlarimimz orqalik turli xil
// meta - data'larni taqdim etish tizimini aynan Decorator Pattern'lar orqalik amalga oshirgan.

// Decorator Design Pattern => Architectural Design Pattern darajasida bo'lmasada, aynan mana shu Decorator pattern'lar bizning nestJS
// loyihamizda, eng muhim, eng faol bo'lgan funktsiyalarni biz uchun integratsiyalarni amalga oshirishga yordam beradi. Xususan AOP'ni
// nestJS'ga integratsiyasini amalga oshirish uchun eng muhim pattern'lardan hisoblanadi.

// Decorator Pattern => Design Pattern bo'lsada, MVC yoki DI'dan kam emas.

// Umumiy xulosada, bizning Nestar loyihamizda, 4 xil pattern'lar ishlatilar ekan:
// 1) MVC
// 2) DI
// 3) Middleware
// 4) Decorator

// -------------------------------------------------------------------------------

// nestJS o'zining shaxsiy common line'ga ega. Bu bizni ishimizni soddalashtirib beradi. Ya'ni
// biz qo'limiz bilan xar bir narsani terib o'tirmaymiz, balkim qisqa operatsiyalar orqalik, masalan
// controller'ni 0'dan qurib vaqt yo'qotmaymiz. Shunchaki nestJS'ni common line'dan foydalanib buyruq berish
// orqalik amalga oshiramiz.
// Masalan: nest generate something .... (controller)

// nestJS'ning common line'i bu juda ham qulay va loyihamiznig develop jarayonini
// tezlashtirib beradi. Ya'ni nestJS common line eng asosiy qurilmalardan hisoblanadi. Chunki
// bu bizning ishimizni tashkillashtirib berishda, bizga to'g'ri-dan yordamda keladigan qurilma
// hisoblanadi.

// ---------------------------------------------------------------

// nestJS'ning common line'dan foydalanish uchun biz @nestjs/cli'ni global package sifatida o'rnatib olishimiz kerak:
// npm i -g @nestjs/cli

// check global packages:
// npm ls -g

// Yangi nestJS commandasidan foydalanib yangi nestJS loyihasini qurish:
// nest new project-name

// Backend uchun => npm
// Frontend uchun => yarn

// ------------------------------------------------------

// nestJS Rest Api Ingridients:
// 1) Controller => Creating Endpoints
// 2) Modules => Addping Dependencies
// 3) Services => Business Logic
// 4) Guards => Authorithation
// 5) Pipes => Validation & Transformation
// 6) Interseptor => Execute Before / After
// ------------------------------------------------------

// --watch => nodemon singarin vazifani o'taydi

// Modullar => o'ziga tegishli bo'lgan controller va service'larni o'zida mujjasamlaydi.

// Modullarni yasash mexanizmi
// @Module Decorator Properties

// nestJS loyihamizda Decorator Design Pattern'lar eng muhim o'rinni egalaydi.
// Va u o'zida quyidagi property'larni mujassam etadi:
// 1) providers
// 2) controllers
// 3) exports
// 4) imports

// ----------------------------------------------
// 1) Providers => Service modullar
// 2) Controllers => Module tarkibidagi array ko'rinishidagi controllers
// 3) exports => Mavjud modelni tashqariga export qilamiz
// 4) imports => External modullarni import qilishda ishlatamiz

// --------------------------------------------

// Burak loyihasidagi service modullarga misol bo'la oladi:
// controllers: [AppController],
// providers: [AppService],

// nestJS'da hamma Decorator'larimiz ma'lum bir class'larga borib ularni boyitib
// bizga meta-data'larni taqdim etmoqda.

// meta-data => nestJS tomonidan taqdim etilgan turli xil features'larni class'ga taqdim etamiz
// va bu class'ni boyitishimiz natijasida, bu class bizning service modullarimizga aylanmoqda.

// @Get()
// public getHello(): string {
//   return this.appService.getHello();
// }

// @Get() => Routing tizimidagi .get() methodini tashkillashtirib beradi va single slash'ga
// teng hisoblanadi => .get("/")

// @Get() => localhost:3000/

// --------------------------------------------
// localhost:3000/

// Biz hamma endopoint'larni localhost:3000/'ga yozmaymiz, aksincha bizga yana boshqa modullarni
// ishlatishimizga ehtiyoj tug'iladi.

// Terminalga quyidagi commandlarni kiritish bilan, nestJS CLI bilan yanada yaqindan tanishimiz mumkin:
// 1) nest -v
// 2) nest --help
// 3) nest g --help

// 'g' => generate

// --------------------------------------------------------------

// Biz, masalan, hayvonot bog'i uchun, mavjud url'ga yana bir request'ni biriktirmoqchi bo'lsak
// nestJS'ning quyidagi commandasini terminalga kiritib biz uni modullar orqalik hosil qilamiz.
// Ya'ni biz uni manual hosil qilmaymiz, aksincha nestJS commandasi orqalik hosil qilamiz

// Ya'ni mavjud, app.module'ga yana bir modul'ni integratsiya qilib, alohida bir 'cat' modulini quyidagi
// commanda bilan hosil qilamiz:

// nest g module cat

// Biz 'cat' nomlik module hosil qilib oldik, ayni 'cat' moduli uchun controller'ni hosil qilishda
// nestJS'ning quyidagi commandasidan foydalanamiz:

// nest g controller cat

// nestJS commandasidan foydalanib 'cat'ga dahldor bo'lgan service'ni hosil qilish:

// nest g service cat

// nest g service cat --no-spec

// ----------------------------------------------------------------------
// controllers => Kelayotgangan request'larni qabul qilib client'ga response'larni qaytarishga javobgar

// mono-repo => katta loyihalar degani
// batch server => ma'lum bir operatsiyani bajaradigan server'lar batch server deyiladi

// 95th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-15
// 96th Lesson
// Start Nestar Mono Repo

// Darsimiz rejasi:
// 1) Nestar monorepo loyihasini boshlaymiz
// 2) Nestart loyihamizga environmental variable'larni configuratsiyasini amalga oshiramiz
// 3) Loyihamizda ihslatiladigan External package'larni installation qilamiz

// ---------------------------------------------------

// nestJS'dan foydalanib loyihazmini ikki xil usulda qurishimiz mumkin:
// 1) Standard mode
// 2) Monorepo mode

// Oldingi darsda, zoo nestJS loyihasini standard mode'dan foydalanib qurganmiz.
// zoo loyihamiz yagona REST API server'idan iborat bo'lganligi uchun, biz zoo
// loyihasini standard mode asosida qurib oldik.

// Faqatgina biz api'dan iborat bo'lgan loyihalarni, standard mode asosida quramiz

// Nestar loyihamiz, zoo loyihamizdan farqli o'laroq, graphQL, crawling api'lariga ham ega.
// Bunday loyihalarda, biz standard mode orqalik emas, balki monorepo orqalik hosil qilishimiz kerak bo'ladi.

// nestJS orqalik loyihamizni monorepo loyihaga aylantirish uchun, avval standard mode asosida loyihamizni
// qurib olishimiz kerak.

// Quytidagi nest CLI commandasi orqali, nestJS standard mode loyihasini hosil qilib olamiz:
// nest new your-app-name

// Quyidagi nest CLI commandasi orqalik, standard mode loyihani monorepo loyihaga aylantiramiz:
// nest generate | g app your-app-name

// 96th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-16
// 97th Lesson
// Develop Nestart Project Standards

// Darsimiz rejasi:
// 1) Loyihamizga GraphQL integratsiyasini amalga oshiramiz va ilk GraphQL API requestimizni xosil qilamiz
// 2) Loyihamizning standartlarini birga shakillantiramiz

// ---------------------------------------------------
// Nestar loyihamizda ikkita server mavjud:
// 1) nestar-api
// 2) nestar-batch

// Shu yerdan boshlab qolgan mantiqlarimizni, aynan shu nestar-api server'ida amalga oshiramiz

// resolver => GraphQL Api'imizni tashkillashtirishda bizga to'g'ridan - to'g'ri yordamga keladigan qurilma xisoblanadi.
// nestSJ'da biz controller'lar orqalik, faqatgina Rest Api server'inigina tashkillashtirishimiz mumkin.

// Rest Api'da controller'larimiz bizning endpoint'larimizni xosil qiladi.
// GraphQL texnologiyasida esa, resolver'lar orqalik biz, query hamda mutation api'larimizni xosil qilamiz.

// ---------------------------------------------------------------

// GraphQL o'zi nima?
// Frontend hamda Backend server orasida GraphQL connection hosil bo'ladi

// GraphQL'ga misol:
// type Astronaut {
//   id: ID!
//   callsign: String!
//   age: Number
//   rockets: [Rocket]
// }

// GraphQL o'zini maxsus schema query language'ga ega bo'lgan texnologiya hisoblanadi.

// Bu query language bizga qanday imkoniyat beradi?
// Avvalom bor biz frontend'da ayni bizga kerakli bo'layotgan ma'lumotlarni belgilab
// bizning GraphQL Api server'imizdan shunchaki chaqirib olish imkoniyati qo'lga kiritamiz.

// Agar biz yuqoridagi mantiqni Rest Api texnoligiyasi orqalik xosil qilayotgan bo'lsak,
// masalan, bizning page'imizda 3 xil ma'lumot kerak,'astronaut', 'rocket', 'moon'.
// Shularning xar birini alohida - alohida backend'imizdan Rest Api'lar orqalik chaqirib olishimiz kerak bo'ladi.

// Xuddi shu narsani GraphQL texnologiyasida esa, har uchala ma'lumotni, yani 'astronaut', 'rocket', 'moon' ma'lumotlarini
// birgina GraphQL Api orqalik amalga oshirishimiz mumkin.

// Demak bizning Client'imiz maxsus schema language'i orqalik bizning backend'imizga request yuboradi, va bizning backend'imiz
// JSON formatda client'imizga, client'imiz so'ragan ma'lumotlarni taqdim etadi.

// ----------------------------------------------------------------------

// GraphQL orqalik, birgina so'rov bilan, server'imizda bir nechta ma'lumotni bir vaqtning o'zida olib kelishimiz mumkin.

// GraphQL client:

//                                            ===> Auth APIs
// GraphQL Api Request ===> HTTP ===> GraphQL ===> Core APIs
//                                            ===> Redis

// REST client:

//                            ===> Auth APIs
// REST Api Request ===> HTTP ===> Core APIs
//                            ===> Redis

// ----------------------------------------------
// Loyihamizda eng kamida, bitta query hosil bo'lishi talab etiladi.
// Agar loyihamizda, birorta ham query bo'lmasa, xatolik yuzaga keladi.

// autoSchemaFile: true => GraphQL schema automatically generate bo'ladi.

// @Resolver() Decorator => Oddiy JS AppResolver class'ini Resolver'ga aylantirib beradi
// export class AppResolver { }

// Quyidagi link orqalik, biz loyihamizning, GraphQL Playground'ini ochishimiz mumkin:
// http://localhost:3007/graphql

// ----------------------------------------------------
// on playground:
// query saySomething {
// sayHello
// }

// result:
// {
//   "data": {
//     "sayHello": "This is GraphQL API Server"
//   }
// }

// ----------------------------------------------------
// Biz Rest Api server'larida biz qilayotgan request'larning server'lari mavjud.
// Biz burak loyihamizda ikki xil request method'idan foydalandik:
// .get() method
// .post() method

// Shartlik ravishda biz burak loyihasida boshqa request method'idan foydalanmadik.

// GraphQL'dagi query bu .get() method'iga teng
// GraphQL'dagi mutaion bu .post() method'iga teng

// subscription => Bizni backend'imizga client'larimiz subscribe bo'ladi va ma'lum bir backend'da sodir
// bo'layotgan event'larni real time'da qabul qilib oladi. Bunga socket.io texnologiyasi misol bo'ladi.

// Nestar loyihasida query, mutation va subscription mantiqlaridan faol foydalanamiz.

// GraphQL operatorlari hisoblanmish, query, mutation va subscription mantiqlarni Resolver'lar hosil qilib beradi.

// -----------------------------------------------------------------------

// NestJS GraphQL Ingridients:
// 1) Resolver => Creating Query & Mutataion GraphQL
// 2) Modules => Adding Dependencies
// 3) Services => Business Logic
// 4) Guards => Authorization
// 5) Pipes => Validate & Transform
// 6) Interceptor => Execute Before / After

// Biz burak loyihasi 3 xil validation'ni ko'rgan edik:
// 1) Frontend Validation
// 2) Backend Validation
// 3) MongoDB Validation

// Dasturlashda 4 xil validation mavjud:
// 4) Frontend va Backend orasidagi validation

// Aynan manu shu 4'chi validation PIPE orqalik hosil bo'ladi.

// Nestar loyihamizda, xar 4 validation'dan faol foydalanamiz

// ---------------------------------------------------------

// Interceptor => Server'larimizga kirish hamda chiqish mantiqlarida ustida ishlash uchun
// interceptor'lardan foydalanamiz.

// GraphQL loyihamizni AppResolver'da davom etmaymiz, buning o'rniga mukammal o'ziga xos va betakror bo'lgan
// standard'larni joriy etamiz.

// Quyidagi commanda orqalik component module'ini hosil qilamiz:
// nest g module components

// nest g module components/member

// nest g module components/property

// Bu module'ni hosil qilishdan maqsad biz nesta api backend server'ining asosiy mantiqini aynan mana y oshu
// components module'ini ichida tashkillashtiramiz.

// components tarkibida hosil qilingan mantiqlari
// backend server api'ga bog'lash uchun ishlatamiz.

// Data base bilan bog'lanish mantig'ini alohida bir module'da hosil qilamiz:
// nest g module database

// database module'ini components module tarkibiga kiritmaganimizning asosiy sababi
// loyiha ishga tushganda, db'ga borib bir marotabada connection hosil qilishligi uchun

// nestJS'da hamma narsa module based achitecture'ga ega.
// Va bu moduler tizimni AOP paradigmasi va DI architectural pattern'lari
// hosil qilib beradi.

// -------------------------------------------------
// 4'chi validation mantiqlarini dto folder'da hosil qilamiz
// dto => data transfer object

// module => Bu interal package singarin tushuncha
// model => Bu database bilan ishlash uchun ishlatiladigan tushuncha

// -----------------------------------------------------------------------
// 97th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-17
// 98th Lesson
// Create new database and connect to it and develop Schema Model and Enums

// Darsimiz rejasi:
// 1) Nestar loyihamiz uchun yangi database'ni cluster orqalik hosil qilamiz
// 2) Loyihamizning database'ga ulanishini amalga oshiramiz
// 3) Nestarga daxldor jami Schema Model'larni tashkillaymiz va Enum'larni birga hosil qilamiz

// ---------------------------------------------------

// ComponentsModule => Api server'ga bog'liq bo'lgan jami mantiqlarni biz, components
// module'da tashkillaymiz.

// MongoDB => Nestar loyihasida, biz ikki xil usulda, mongoDB'ga connect qilamiz:
// 1) Birinchisi develop jarayoni uchun => MONGO_DEV
// 2) Ikkinchisi production jarayoni uchun => MONGO_PROD

// ----------------------------------------------------
// Biz hosil qilingan enum'lar bilan GraphQL bilan ishlatishni maqsad qilganmiz.
// Shunig uchun nestJS'ning o'zida mavjud, enum'larni ro'yxatga oladigan,
// registerEnumType package'idan foydalanamiz.
// Quyidagi mantiq bilan, shu enum'larnimizni GraphQL'da ham ishlatishimiz mumkin.

// import { registerEnumType } from "@nestjs/graphql";

// registerEnumType(MemberAuthType, {
// 	name: "MemberAuthType",
// });

// select: false => By default password'ni bizga olib bermaydi

// memberPassword: {
// 	type: String,
// 	select: false,
// 	required: true,
// },

// ---------------------------------------------------

// Quyidagi '1' qo'yish mantig'i compound mantiqni hosil qilishdir.
// Ya'ni, mana shu 4'ta ma'lumot bir vaqtni o'zida 'unique' bo'lishi kerak.
// PropertySchema.index({ propertyType: 1, propertyLocation: 1, propertyTitle: 1, propertyPrice: 1 }, { unique: true });

// ---------------------------------------------------

// 98th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-17
// 99th Lesson
// Develop Module, Resolver and Services relate to Members

// Darsimiz rejasi:
// 1) Loyihamizning Components Module tizimi va unga daxldor bo'lgan Member Module tizimi haqida mushoxada etamiz.
// 2) Memberlarimizga daxldor bo'lgan Member Resolver'ni tashkil qilamiz
// 3) Member'larimizga daxldor bo'lgan Member Service Model va Member Schema Model'ni tashkil etamiz

// nestJS AOP pradigmasiga tayanib, module tizimida ishlaydi

// Biz module'larni hosil qilishimiz uchun quyidagi kommandlardan foydalanamiz:
// nest g module components/mdule-name

// Biz module'larimizni istalgan ketma - ketlikda import qilishimiz mumkin

// controller => Rest Api uchun
// resolver => GraphQL Api uchun

// Har bir module uchun quyidagi commanda orqalik auto-generate qilamiz:
// nest g module components/your-module-name
// nest g service components/your-module-name --no-spec
// nest g resolver components/your-module-name

// --no-spec => Bizga test uchun alohida bir faylsiz install qilishni amalga oshirib beradi.

// ---------------------------------------------------------------------

// Backend va Fronted developer'lar o'zaro ishlashi uchun documentation'lar juda ham muhim hisoblanadi
// Agar siz Rest Api'lar bilan ishlasangiz, Rest Api'larni documentation'ini qurib beradigan texnologiyalar mavjud.
// Masalan => swagger.io => Api hamda design tool

// Lekin GraphQL Api'larda swagger'da qilinadigan narsa automativ sodir bo'ladi. Ya'ni GrapQL'ning o'zi
// bizga automatic tayyor documentation'ni qurib beradi.

// GraphLQ query nomi doim katta harf bilan yoziladi:

// query GetMember {
// your method name in resovler
// }

// mutation Login {
// your method name in resovler
// }

// -------------------------------------------------
// Quyidagi code orqalik 'Member Schema Module'ini hosil qilyapmiz:
// MongooseModule.forFeature([
// 	{
// 		name: "Member",
// 		schema: MemberSchema,
// 	},
// ]),

// ---------------------------------------------------

// 99th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-20
// 100th Lesson
// Develop Signup and Login process

// Darsimiz rejasi:
// 1) Pipe ingridienti haqida mushohada qilamiz va Pipe validation integratsiyasini amalga oshiramiz
// 2) Signup jarayonini develop qilamiz
// 3) Login jarayonini tashkil etamiz

// ---------------------------------------------------
// Pipe ingridienti => Bizga validation va transformation mantiqlarini amalga oshirishga yordamga keladi

// Bizning backend server'imiz Rest Api bo'lishi mumkin, yokida nestar loyihamiz singarin GraphQL Api bo'lishi mumkin.
// Umuman olganda, bizning backend qaysi server turidan bo'lishidan qat'iy nazar, bizni client'imizdan kirib kelayotgan ma'lumotlarni
// to'g'ri tashkillashtirilganligini tekshirishimiz kerak bo'ladi. Xususan, biz Rest Api haqida gaplashadigan bo'lsak, biz controller'larimizni
// tegishlik method'lariga borgunga qadar, ya'ni bizni backend'imizning ma'lum bir controller'iga dahldor bo'lgan ayni bir method'iga borgunga qadar
// kirib kelayotgan ma'lumotlarni to'g'riligini tekshirishimiz kerak bo'ladi yokida nestar loyihamizning resolver method'lariga ma'lumotlar kirib kelgunga
// qadar to'g'ri tashkillashtirilganini biz tekshirishimiz kerak bo'ladi.

// Umumiy hisobda, validation'ning 4 xil turi mavjud:
// 1) Front-end validation (required)
// 2) Front-end va Back-end orasidagi validation (pipe)
// 3) Backend validation (type)
// 4) Database validation (schema)

// ---------------------------------------------------

// pipe'lar ikki xil maqsadda ishlatiladi:
// 1) transformation => Bir turdan ikkinchi turga o'tkazish (check type)
// 2) validations => Kirib kelayotgan ma'lumotni validatsiyalash

// pipe'dan foydalanish uchun, pipe validator'ni quyidagi commanda bilan o'rnatib
// olishimiz kerak:
// npm i --save class-validator class-transformer

// pipe'larni 3 xil usulda loyihamizga integratsiya qilishimiz mumkin:
// 1) Global app pipe
// 2) Controller & resolver method
// 3) Controller method & resolver method

// pipe validation'larni yaxshi tushunib olish uchun biz 3'chi method
// method'lardan foydalanamiz.

// Buning uchun bizga tayyor built-in validation decorator'lar yordamga keladi:
// IsBoolean() => Cheks if a value is a boolean
// IsString() => Checks if the value is a string
// IsArray() => Checks if the value is an array
// etcetera...

// ---------------------------------------------------

// @Field(() => MemberType, {nullable: true}) => nullable: true => bo'sh bo'lishi mumkin degani

// @ObjectType() => DTO'larni qurish uchun ishlatiladigan decorator

// GraphQL juda ham murakkab va mukammal texnologiya hisoblanib, kirib kelayotgan va chiqib kelayotgan
// ma'lumotlarni o'z nazorati ostiga oladi. Va buning natijasida frontend qismida backend'dan kirib kelayotgan
// ma'lumotlarni validatsiya qilishimiz kerak bo'lmaydi

// Biz burak loyihasini redux artchitecture bilan qurgan edik, bizning redux architecure'imiz nafaqat ma'lumotlarni
// saqlab bunker vazifasini o'tadi, balki backend'dan kirib kelayotgan ma'lumotlarni saqlashdan oldin typescript yordamida
// tekshirdi ham.
// Ya'ni redux ham bunker ham validation vazifasini o'tadi

// Nestar loyihamizda bunga  ehtiyoj bo'lmaydi, chunki GraphQl texnologiyasi o'zi validation qilish imkoniyatini beradi.
// Biz shunchaki front-end'da redux bunker o'rniga, back-end'dan kirib kelayotgan ma'lumotlarni cache'laymiz.
// Cache'lashdan oldin validatsiya qilmaymiz, chunki biz aniq bilamizki, backend'dan front-end'ga kelayotgan ma'lumot
// GraphQL texnologiyasi yordamida mukammal validatsiyalangan bo'ladi.

// ---------------------------------------------------

// @Field(() => String) => String => JS grouping types
// memberPhone: string; => Typescript type

// GraphQL bilan ishlashda, object type va input type'larni yaxshi ishlatishni bilishingiz kerak.
// GraphQL ko'nikmalari amaliyot davomida shakllanadi.

// GraphQL'da customized error'larni birma - bir qurib chiqishimiz ham shart emas.
// GraphQL'ning o'zi bizga turli errorlarni handle qilish mexanizmlarini taklif etadi.
// Masalan, quyida 500 statuslik internal error:
// throw new InternalServerErrorException(Message.BAD_REQUEST)

// -----------------------------------------------------------
// MongoDB'dan client'ga noma'lum bo'lgan error'lar qaytganligi uchun biz,
// mongoDB error'larini handle qilishda, try-catch orqalik customized error'lardan
// foydalanamiz.

// ---------------------------------------------------
// @Field(() => String) => Field bizga GraphQL orqalik CRUD operatsiyalarini amalga oshirishga yordam beradi.
// memberNick: string;

// ---------------------------------------------------

// 100th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-22
// 101th Lesson
// Develop Global Error handling, Global validation va Logging
// standartlarini amalga oshiramiz.

// Darsimiz rejasi:
// 1) Global validation standartlarini joriy etamiz
// 2) Global Error handling'ni tashkil etamiz
// 3) Logging standartlarini ishlab chiqamiz

// ---------------------------------------------------
// nestJS CLI => configuratsiyalarini nest-cli.json fayli orqalik modify qilamiz

// Backend'imizga xizmat qiladigan module'larni component.module.ts fayli tarkibida tashkillashtirib boramiz.

// Loyihamiznig quyidagi qismigacha, biz pipe validation'ni xar bir method uchun alohida qo'lladik, ya'ni
// ularni global tarzda qo'llaganimiz yo'q. Bu usul bizga biroz noqulaylik tug'diradi.

// Documentation bo'yicha pipe'larni integratsiyasini 3 xil usulda amalga oshirish mumkin:
// 1) controllers tarkibida
// 2) methods usulida
// 3) global app ko'rinishida

// Biz loyihamizda pipe validation'ni global app ko'rinishida amalga oshiramiz!
// main.ts:
// app.useGlobalPipes(new ValidationPipe());

// ---------------------------------------------------

// Global error handling mantiqlarini app.module.ts GraphQL module'ini ichida amalga oshiramiz.
// Biz error'larni handle qilishni har bir method uchun alohida amalga oshirgan edik.

// Global error'larni handle qilishimizdan sabab, har bir method uchun alohida try-catch yozmaslik va
// nestJS'ning customized error'laridan xalos bo'lib o'zimizni standart error'larimizni joriy qilishdir.
// Va natijada bu stadart error'lar frontend dasturchilarimizga ham backend'dan kelayotgan error'larni tushunishi
// osonlashadi.

// ---------------------------------------------------
// Har bir request'imiz natijasini ko'rish uchun, biz intceptor'lardan foydalanamiz.
// Interceptor => Execute before / after
// Interceptor => Client'dan server'ga kirib kelayotgan so'rovlarni manipulate qilishga bizga
// interceptor'lar yordamga keladi.

// Interceptor'lar ham AOP'ni qo'llash orqalik hosil qilingan.

// Quyidagi method orqalik, client'dan backend'da kirib kelayotgan so'rov turini ya'ni
// u graphQL'mi yoki rest api (http) server ekanligini aniqlaymiz:
// const type = context.getType();

// Nestar monorepo loyihamizning default application'i nestar-api bo'lsa,
// loyihaning asosiy module bu app.module.ts hisoblanadi.

// app.module.ts:
// controllers: [AppController] => Rest Api (test qilish hamda o'rganish uchun qoldirildi)

// Nestar loyihamiz bir vaqtni o'zida ham GraphQL va test uchun soddagina Rest Api so'rovlarini
// amalga oshirmoqda.

// --------------------------------------------------
// nestJS paradigmalari:
// 1) OOP (Object Oriented Programming)
// 2) FP (Functional Programming)
// 3) FRP (Functional Reactive Programming)

// Observable => FRP'ning unsuri hisoblanadi

// ---------------------------------------------------

// 101th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-23
// 102th Lesson
// Develop Authentication process

// Darsimiz rejasi:
// 1) Password'larimizni hash qilish mexanizmini bycript orqali tashkil etamiz
// 2) Authentication jarayonini Token'lar orqalik hosil etamiz

// --------------------------------------------------

// monorepo project => Yagona loyihada bir qator application'larning mavjud bo'lishi

// ---------------------------------------------------

// 102th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-24
// 103th Lesson
// Develop Authentication and Authorization process via Guard Decorator and Custom Decorators

// Darsimiz rejasi:
// 1) Authentication qurishning uch xil uslubi haqida mushohada qilamiz
// 2) Authorization hamda uning Authenticationdan farqli tomonlari haqida gaplashamiz
// 3) Authentication va Authorization jarayonlarini Guard'lar hamda xususiy Decoratorlar orqali tashkil etamiz

// --------------------------------------------------

// Authentication jarayonini 3 xil usulda qurishimiz mumkin:
// 1) Sessions (in Coookies) (sid => session ID)
// 2) Tokens (in Cookies)
// 3) Tokens (in Header)

// Browser'ning storage'lari:
// 1) Local storage
// 2) Session storage
// 3) Cookies
// 4) Cache storage

// Cookies => Browser'ning eng himoyalangan storage'i hisoblanadi.

// Cookie'ni bir marotaba Browser'ning cookie storage'ga joylaymiz, va shundan so'ng, bu cookie
// har bir request jarayonlari uchun tirmashib oladi. Ya'ni xar bir request'imizda, bizning cookie'larimiz
// frontend'imizdan ~ backend'imizga qarab yo'l oladi. Cookie tarkibida joylashgan session ID (sid) orqalik
// bizning frontend'imizdan ~ backend'imizga aynan kim murojaat etayotganini aniqlay olamiz (authenticate)

// Cookie has self-destroy feature

// Nega biz Nestar loyihamizda cookie'lardan foydalanmadik?
// Javob => Bunga asosiy sabab, kelajakda biz, Nestar loyihasining haqiqiy mobile variantini ham develop qilishimiz mumkin.
// Aynan haqiqiy mobile application'ida cookie'lar mavjud bo'lmaydi. Cookie'lar faqatgina browser cookie storage'da bo'ladi xolos.

// Biz uchun Nestar loyihamizning backend'ini mobile application'ga ham moslashtirish uchun Token in Header authentication method'idan
// foydalanamiz.

// ---------------------------------------------------
// Signup & Login jarayonlarida bizning Nestar backend server'imiz token'larni hosil qilib accessToken sifatida frontend'imizga yuborayotgan edi.

// Biz endi shu accessToken'ni browser'ning local storage'ga saqlab olgan holda keyingi request'larimizga Header'lar oqalik ushbu accessToken'ni jo'natishimiz kerak.

// AGENT turidagi foydalanuvchilar, faqatgina uylarni va property'larni tashkillashtira oladi

// http://localhost:3007/graphql => Kelajakda biz domain olingandan so'ng token'larni env'lardan tashkillashtirsak bo'ladi\

// ---------------------------------------------------

// Authentication => Serverimizga kim murojaat etayotganligini aniqlab beradi (who are you?)
// Authorization => User'ning server'dagi ma'lum bir ma'lumotlar uchun access qilish uchun permission beradi (are you allowed to do that)

// Authorization & Authentication mantiqlarini nestJS'da Guards'lar orqalik tashkillashtiramiz

// Guards => (Himoya) => nestJS'ning CanActivate interface'dan implement oladigan Injectable() decorator'iga ega izohli class hisoblanadi.

// Guards client'dan kelayotgan HTTP request ustida authenticated yoki authorization operatsiyalarini amalga oshirib keyingi bosqicha o'tkazish yoki
// o'tkazmaslik mantiqlarini amalga oshirib beradi:

// CLIENT SIDE (http request) => GUARD => Route Handler (@RequestMapping)

// ---------------------------------------------------

// createParamDecorator => Custom decorator'larni hosil qilishda ishlatamiz

// ----------------------------------------------------

// Authorization manqitig'ini qurish uchun RolesGuard syntax'idan foydalanamiz

// RolesGuard vs AuthGuard:

// RolesGuard'da biz tayinlagan role'larni refloctor ham chaqirib oladi.
// role'larni esa '@Roles(MemberType.ADMIN)'da tayinlab olganmiz.

// nestJS GraphQL ingridient'lari quyidagi tartibda ishga tushadi:
// 1) Module
// 2) PIPES (validation)
// 3) GUARDS
// 4) INTERCEPTORS
// 5) RESOLVERS
// 6) SERVICE

// ------------------------------------------------------

// 103th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-27
// 104th Lesson
// Develop updateMember and getMember GraphQL APIs

// Darsimiz rejasi:
// 1) updateMember GraphQL API'larini develop
// 2) getMember GraphQL API'ini develop qilamiz
// 3) View Module orqali memberlarni tomosha qilish mexanizimini joroy etamiz

// ---------------------------------------------------
// $in: => (inclusion) active ekanligini tekshiradi

// imports: [MongooseModule.forFeature([{ name: "View", schema: ViewSchema }])] => view schema model'imizni hosil qilib
// view module'ini ichiga import qilib beradi.

// ---------------------------------------------------

// 104th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-28
// 105th Lesson
// Develop getAgents, getAllMembersByAdmin, updateMemberByAdmin and GraphQL APIs

// Darsimiz rejasi:
// 1) getAgents GraphQL API'ni develop qilamiz
// 2) Adminga daxldor getAllMembersByAdmin GraphQL API'ni develop qilamiz
// 3) Adminimizga daxldor updateMemberByAdmin GraphQL API mantig'ini develop qilamiz

// ---------------------------------------------------
// $facet: => Bir necha murakkab aggregation pipeline'larni combinatsiya qila olamiz.

// ---------------------------------------------------

// 105th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-30
// 106th Lesson
// Serverimizga turli hil fayllarni yuklashni GrahpQL texnologiyasi asosida tashkil etamiz

// Darsimiz rejasi:
// 1) Serverimizga turli hil fayllarni yuklashga xizmat qiladigan graphql-upload package haqida gaplashamiz
// 2) Serverimizga birlik image'ini yuklash uchun xizmatga keladigan imageUploader GraphQL API'ni develop qilamiz
// 3) Serverimizga bir nechta image'larni yuklashga xizmatga keladigan imagesUploader GraphQL API'ni develop qilamiz

// ---------------------------------------------------

// { "0": ["variables.files.0"], "1": ["variables.files.1"], "2": ["variables.files.2"], "3": ["variables.files.3"], "4": ["variables.files.4"] }
// 4'tadan ortiq surat'ni yuklay oldim

// imageUploader & imagesUploader => Oralik mantiq hisoblanadi

// ---------------------------------------------------

// 106th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-08-30
// 107th Lesson
// Develop createProperty business logic

// Darsimiz rejasi:
// 1) Property Module uchun xizmat qiladigan Property Resolver va Property Service
// Model hosil qilamiz
// 2) createProperty GraphQL API'ni develop qilamiz
// 3) Member collection documentlarini statistik ma'lumotlariin modify qilish tizimini hosil etamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 107th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-01
// 108th Lesson
// Develop GraphQL API's related to Property Module

// Darsimiz rejasi:
// 1) getProperty API'ni develop qilamiz
// 2) updateProperty GraphQL API'ni develop qilamiz
// 3) getProperties GraphQL API'ni develop qilamiz
// 4) getAgentProperties GraphQL API'ni develop qilamiz

// ---------------------------------------------------

// $unwind => Aggregation pipeline'lari tarkibidagi input dokumentlaridan array field'ni deconstruct qilib
// xar array'ning xar bir elementi uchun alohida document hosil qilish uchun ishlatalidigan
// mongoDB operator hisoblanadi

// $gte => Greater than or equal
// $lte => Less than or equal
// $in => includes

// Aggregate.prototype.lookup() => Bir vaqtni o'zida bir nechta collection bo'ylab cross-query
// qilish mantig'i imkonini beradi:
// aggregate.lookup({from: "users", localField: "userId", foreignField; "_id", as: "users"})

// ---------------------------------------------------

// 108th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-01
// 109th Lesson
// Property'ga daxldor admin loyihamizning GraphQL API'larini tashkil etamiz

// Darsimiz rejasi:
// 1) getAllPropertiesByAdmin GraphQL API'ini develop qilamiz
// 2) updatePropertyByAdmin GraphQL API'ini develop qilamiz
// 3) removePropertyByAdmin GraphQL API'ini birga develop qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 109th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-05
// 110th Lesson
// Board Article daxldor barcha GraphQL API'larini develop qilamiz

// Darsimiz rejasi:
// 1) Board Article'ga daxldor DTO'larni loyihamizga yuklaymiz
// 2) createBoardArticle, getBoardArticle, updateBoardArticle va getBoardArticles GraphQL API'larini develop qilamiz
// 3) getAllBoardArticlesByAdmin, updateBoardArticlesByAdmin va removeBoardArticleByAdmin GraphQL API'larini develop qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 110th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-06
// 111th Lesson
//Comment yozishga daxldor barcha GraphQL API'larini develop qilamiz

// Darsimiz rejasi:
// 1) Comment'ga daxldor DTO'larni loyihamizga yuklaymiz
// 2) createComment, updateComment va getCommet GraphQL API'larini develop qilamiz
// 3) Admin bilan daxldor removeCommentByAdmin GraphQL API'larini develop qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 111th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-07
// 112th Lesson
// Like jarayoniga bilvosita daxldor GraphQL API'larini develop qilamiz

// Darsimiz rejasi:
// 1) Like moduliga daxldor bo'lgan DTO'larni loyihamizga yuklaymiz
// 2) likeTargetMember, likeTargetProperty va likeTargetBoardArticle GraphQL API'larini develop qilamiz
// 3) Ma'lum bir member, property yoki board article yoqtirilganligi haqida ma'lumotlarni olish mexanizmini tashkil etamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 112th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-11
// 113th Lesson
// Follow jarayoniga va unga daxldor bo'lgan GraphQL API'larini develop qilamiz

// Darsimiz rejasi:
// 1) Follow Moduli'ga daxldor bo'lgan DTO'alrni loyihamizga yuklaymiz
// 2) Subscribe, unsubscribe, getMemberFollowings. getMemberFollowers GrahpQL API'larini develop qilamiz
// 3) getMember GraphQL API'ga daxldor bo'lgan subscriptionni tekshiruvchi mantiqni joriy etamiz

// ---------------------------------------------------
// followingId => subscribe qilayotgan shaxs
// followerId => subscribe qilinayotgan shaxs

// nestJS'da ikkita module'ni bir - birini tarkibida imports qiladigan bo'lsak, cercular dependecy
// xatoligi vujudga keladi. Bu xatolikni forwarRef() orqalik bartaraf etishimiz mumkin:

// forwardRef(() => MemberModule)

// circular dependency xatoligini forwardRef() orqalik bartaraf etganimiz yaxshi yechim, lekin
// alternativa sifatida boshqa yechim ham mavjud. Bu yechim import qilinishi kerak bo'lgan module'ning
// schema'sini to'g'ridan - to'g'ri chaqirishdir. Ya'ni member module tarkibiga FollowSchema'ni integratsiya qilishdir.

// ---------------------------------------------------

// 113th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-11
// 114th Lesson
// Like va Follow'ga daxldor Aggregation complex Lookup query mantig'ini tashkil etamiz

// Darsimiz rejasi:
// 1) getProperties GraphQL API'da like bilan daxldor complex query mantig'ini develop qilamiz
// 2) Like bilan daxldor bo'lgan complex query mantig'ini boshqa GraphQL API'larida joriy etamiz
// 3) Follow bilab daxldor Aggregation complex Lookup query mantig'ini develop qilamiz

// ---------------------------------------------------

// $and: [{ $eq: ["$likeRefId", "$$localLikeRefId"] }, { $eq: ["$memberId", "$$localMemberId"] }],
// Complex query mantig'ini tarkibida, local variable hosil qilib uni ishlatish uchun ikkita dollar belgisidan foydalanamiz: $$

// ---------------------------------------------------

// 114th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-13
// 115th Lesson
// Property'ga daxldor bo'lgan getFavorities va getVisited GraphQL API'larini develop qilamiz

// Darsimiz rejasi:
// 1) Biz tarfadan yoqtirilgan property'larni topish mantig'i getFavorities GraphQL API'ni develop qilamiz
// 2) Biz tomondan tomosha etilgan property'larni topish ya'ni getVisited GraphQL API'ni develop qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 115th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-13
// 116th Lesson
// Loyihamizda Socket connection'ni amalga oshiramiz

// Darsimiz rejasi:
// 1) HTTP protocol hamda TCP protocollar orasidagi tafovut
// 2) WebSocket o'zi qanday texnologiya, va u bizga qanday vazifalarni hal etib beradi
// 3) Loyihamizda WebSocket connection jarayonini develop qilamiz

// ---------------------------------------------------

// HTTP protocol hamda TCP protocollar orasidagi tafovut:
// Masalan, biz amazon website'ga tashrif buyursak, bizning browser'imiz ya'ni client'imiz
// tegishli serverlarga HTTP request'ni amalga oshiradi. Aynan biz hozirga qadar siz bilan amalga oshirgan
// rest API va graphQL API'lar HTTP request orqalik amalga oshiriladi. Bu orqalik server'dan turli - tuman ma'lumotlar
// qabul etiladi.

// HTTP => deb nomlanishiga asosiy sabab bu, protocol hisoblanadi. Ya'ni HTTP'ning ma'nosi
// HyperText Transfer Protocol. Demak client'imiz ma'lum bir API orqalik bizning serverimizga request'ni amalga oshirad
// va bizning server qaysi client'ga javob berishni o'sha request'dan kirib kelgan API orqalik hal etadi. Ushbu jarayonda
// HTTP request'imiz request - response module asosida o'z faoliyatini amalga oshiradi.
// Ya'ni client server'ga request'ni amalga oshirda, va server response'ni amalga oshiradi. Bu jarayon orasida
// HTTP o'z faoliyatini amalga oshiradi. Server'dan client'ga ma'lumotlar yuborilgandan so'ng, client va server orasidagi
// connection butunlay yo'q bo'lib ketadi. Ya'ni bu bir martalik ma'lumotlar almashinuvini ta'minlab beradigan client va server
// amalga oshirib beradi.

// Lekin biz, bir martalik ma'lumotlar almashunivini emas, client va server bir vaqtni o'zida
// bir - biriga ma'lumotlarni joriy etsin. Bu imkoniyatni HTTP request amalga oshirib bera olmaydi.
// Chunki HTTP request stateless communication hisoblanadi ya'ni client va server orasida stable (damoviy)
// connection bo'lmaydi.

// Stateless Communication => O'zaro bir - biriga bog'liq bo'lmagan aloqa

// Here is more direct info about HTTP request:
// 1) HTTP's communication is stateless
// 2) It does not stay connected with the server
// 3) The server cannot directly communicate with the client (Bi-directional communication is not possible)

// SAVOL => Jonli efir video'lari ham TCP Connection'ni qo'llaydimi?

// -------------------------------------------------------------
// TCP/IP Connection:
// Client va server orasida uzliksiz connection'ni ta'minlab beradigan texnologiya bu HTTP ustida qurilmaydi
// Balkim, TCP ustida quriladi. Masalan, bizning browser'imizda bir o'yin mavjud bo'lsin, Bu o'yinning ma'lumotlari
// doim yangilansin. Biz yangilangan ma'lumotni doim refresh qilib qabul qilishimiz mumkin lekin doimiy refresh qilish
// metodi yaxshi method hisoblanmaydi. Yoki POLLING qilishimiz mumkin ya'ni ma'lum bir belgilangan vaqtda HTTP orqalik so'rovni
// qayta - qayta amalga oshirishimiz mumkin. Va polling methodi ham yaxshi usul hisoblanmaydi.

// Mana shunday vaziyatda bizga TCP Connection yordamga keladi. Ya'ni bizning client'imiz server'ga doimiy aloqani TCP orqalik tashkillaydi.
// Va buning natijasida biz client va server'lar orasida uzluksiz ma'lumotlar almashinuvini tashkillashtirishimiz mumkin, toki client va
// server orasidagi connection saqlanguncha.

// TCP ustida qurilgan client va server orasidagi uzliksiz requestni ikki inson bir vaqtda
// bir - biri bilan gaplashishni holatida o'xshatishimiz mumkin.

// CLIENT ===> WEB SOCKET ===> SERVER (continously)
// CLIENT <=== WEB SOCKET <=== SERVER (continously)

// A little bit more about Web Socket:
// Bi-directional full-duplex communication protocol built on top of Transmission Control Protocol (TCP), allowing a presistent connection
// between the client and the server.

// Web Socket orqalik client va server'lar orasida uzluksiz ma'lumotlar almashinuvini joriy etishimiz mumkin bo'ladi.
// Aynan Web Socket texologiyasini quyidagi holatlarga amalda qo'llashga misol qilishimiz mumkin:
// 1) Real-time chats
// 2) Live notications
// 3) Online gaming
// 4) Interactive web applications

// SAVOL => Telegram singarin chat application qurish uchun Web Socket'dann foydalansak bo'ladimi?

// Conculusion HTTP vs TCP:
// 1) HTTP => Bir marotabalik request & response (burak, nestar)
// 2) TCP/IP (web socket) => Client va server orasida uzluksiz bog'liqlikni amalga oshirib beradi (real-time chats etc.)

// -------------------------------------------------

// Nestar mono-repo loyihamizda ikkita server mavjud:
// 1) nestar-api
// 2) nestar-batch

// nestar-api serveri client'ga tegishlik bo'lganligi uchun, web-socket mantig'imizni
// qurish uchun eng yaxshi joy bu nestar-api graphQL serveri hisoblanadi.

// Loyihamizga web-socket'ni o'rnatish jarayoni quyidagicha bo'ladi:
// 1) nest g module socket --no-spec
// 2) nest g gateway socket --no-spec

// ---------------------------------------------------

// 116th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-13
// 117th Lesson
// Batch server va unga daxldor bo'lgan Job Schedule'larni develop qilamiz

// Darsimiz rejasi:
// 1) Batch server o'zi nima va u bizga qanday vazifalarni hal etib beradi
// 2) Foydali schedule'ga daxldor bo'lgan decorator'lar haqida gaplashamiz
// 3) Bizning Batch server'imizga daxldor bo'lgan Job Schedule'larni develop qilamiz

// ---------------------------------------------------

// Batch Server => ma'lum bir commandalarni o'zida mujassam qilishi uchun yaratailgan
// server hisoblanadi. Bu kommandalar ma'lum bir vaqtda ma'lum bir kommandlarni avtomatik
// ravishda ishga tushirib berar ekan.

// Masalan nestar loyihamizda batch server'idan home page'imizda top property'lar va top agent'lar ro'yhatini
// shakllantirishda qo'llaymiz. Ya'ni biz shakllantirgan batch server'imizda ma'lum bir vaqtda bir marotaba ishga tushib beradigan
// maxsus mantiqlarni hosil qilishimiz mumkin. Va bu mantiqni biz Job Schedule deb nomlaymiz. Ya'ni sutkamizning ma'lum
// bir vaqtida avtomatik o'zi ishga tushadi va belgilangan vazifalarni amalga oshirib, hosil bo'lgan natijani database'ga qayd etib beradi.

// Masalan, biz top agent'lar ro'yhatini eng ko'p property'ga ega bo'lgan yoki eng ko'p like'lar soniga ega bo'lgan
// yokida eng ko'p ko'rilganlar soni bo'yicha aniqlab shakllantirishimiz mumkin.

// Masalan, platformamizda mavjud member'lar orasidan eng ko'p faol bo'lgan member'larni aniqlab ularga biror bir bonuslarni
// berish vazifasi berilgan bo'lsa, biz bu mantig'imizni, Job Schedule orqalik backend server'imizda tashkillashtirishimiz mumkin.
// Yuqoridagi misol va shunga o'xshash mantiqlarni shakllantirish uchun bizga aynan batch server yordamga keladi.

// await Promise.all(promisedList); => Bir vaqtni o'zida hammasini to'liq ishga tushishini ta'minlab beradi

// @Cron("00 00 01 * * *", .....) => Tungi soat 01: 00: 00'da batch server ishga tushadi
// @Cron("20 00 01 * * *", .....) => Tungi soat 01: 00: 20'da batch server ishga tushadi
// @Cron("40 00 01 * * *", .....) => Tungi soat 01: 00: 40'da batch server ishga tushadi

// @Cron("00 00 * * * *", .....) => Batch server har soatda ishga tushadi

// ---------------------------------------------------

// 117th shu yerda yakunlandi
// 수고 하셨습니다!
