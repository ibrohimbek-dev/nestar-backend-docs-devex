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

// SAVOL => redux validation yaxshi emasmidi?

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
