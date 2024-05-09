/* Javascript-də DOM sözünün açılışı Document Object Model deməkdir,
DOM HTML faylını node-lardan ibarət strukturda təmsil edir,
burada olan node-lar HTML faylında olan elementlər, atributlar və text ola bilər.

Biz DOM-da olan element-lərə yenilərini append edə, hər hansı bir elementi remove edə,
onun property-lərini və style-ını dəyişə, event-lərə listen edə bilərik.
Bütün bu proseslər birlikdə DOM manipulation adlanır.

İndi isə bu sadaladığımız method-ların necə işlədiyinə baxaq
*/

/* DOM-a yeni element add etmək üçün append və ya appendChild method-undan istifadə olunur.
 Əsas fərqləri append vasitəsilə DOM-a birbaşa string əlavə edilə bilməsi, appendChild-da isə
 bunun mümkün olmamasıdır.

Hər hansı bir elementi append etməmişdən əvvəl biz mütləq document.createElement() methodun-dan
istifadə edərək həmin elementi yaratmalıyıq.
 */

const div = document.createElement("div");

/* Sonra isə həmin elementi birbaşa body-ə, və ya hansısa bir element-ə append edə bilərik.
Əgər elementi başqa element-ə append etmək istəyiriksə biz birinci növbədə query selector-lardan
istifadə edərək həmin element-i HTML-dən JS faylına keçirməliyik.
*/

div.innerText = "Javascript";

document.body.appendChild(div);

const targetDiv = document.getElementById("target");

targetDiv.appendChild(div);

// Verilmiş elementi remove etmək üçün istifadə olunur.
// elementById.remove()

/* Biz elementi müxtəlif query selector-lardan istifadə edərək seçə bilərik. Query selectorların yazılış qaydası
fərqlənir, amma hamısı bizə bir və ya bir neçə element qaytarır.
*/

// const element1 = document.getElementById("Elementin HTML-də olan id-si"); getElementById 1 element qaytarır.

/* const elements = document.getElementsByClassName('Elementin HTML-də olan class-ı');
getElementsByClassName verilmiş classname-ə sahib olan bütün elementlərdən ibarət HTML collection qaytarır.
Bu collection-un hər hansısa bir elementini seçmək üçün array-lərdə olduğu kimi [index]-dən istifadə olunur.
*/

const links = document.getElementsByClassName("link");

console.log(links[1]);

/* querySelector vasitəsilə biz dinamik şəkildə elementin id-sini, class-ını və ya elementin növünü ötürməklə
elementi seçə bilərik. Biz id seçmək istəyiriksə # , classname seçmək istəyiriksə . işarəsindən istifadə edəcəyik.
Element növünə görə seçildikdə querySelector daxilində birbaşa elementin növü yazılır.
*/

const elementById = document.querySelector("#target");

const elementByClassname = document.querySelector(".link");

const elementByType = document.querySelector("a");

/* querySelector eyni adlı classname və ya elementlərdən yalnız ilk olanı qaytarır. Əgər bütün elementləri qaytarmaq
istəyiriksə querySelectorAll-dan istifadə etmək lazımdır. Bu zaman yenə [index]-dən istifadə edərək tək elementi seçə
bilərik.
*/

const elementsByClassname = document.querySelectorAll(".link");

// Array.from()-dan istifadə edərək array-a çevirmək mümkündür.

const arr = Array.from(elementsByClassname);
console.log(arr);

/* Biz DOM manipulation vasitəsi ilə həm də elementlərin style attributlarını dəyişə, classname və ya id əlavə edə
və ya silə bilərik. 
*/

elementById.style.backgroundColor = "red";
elementById.style.width = "300px";
elementById.style.height = "300px";
elementById.style.display = "none";

elementById.classList.add("visible");

elementById.classList.remove("visible");

elementById.classList.contains("visible");

const clickMe = document.getElementById("clickMe");

/* Toggle classlist add və remove method-larını özündə birləşdirir, elementin classlist-ində toggle method-una ötürülmüş class
varsa həmin class-ı remove edir, yoxdursa əlavə edir
*/
clickMe.addEventListener("click", () => {
  elementById.classList.toggle("visible");
});

/* Property set etməyin bir yolu da setAttribute(props1, props2) method-undan istifadə etməkdir. Bu zaman birinci ötürülən props
property-nin növü, ikinci isə value-sudur.
*/

elementById.setAttribute("id", "newID");

// Eyni zamanda getAttribute-dan istifadə edərək hər hansı bir elementin property value-sunu dəyişənə assign etmək mümkündür.

const id = elementById.getAttribute("id");

console.log(id);

// Dynamic formada datadan elementlər yaratmaq:
const linksData = [
  {
    title: "Github",
    url: "https://github.com/",
  },
  {
    title: "Google",
    url: "https://google.com/",
  },
  {
    title: "Youtube",
    url: "https://youtube.com/",
  },
  {
    title: "New url",
    url: "https://youtube.com/",
  },
];

linksData.map((link) => {
  const a = document.createElement("a");
  const br = document.createElement("br");
  a.setAttribute("href", link.url);
  a.innerText = link.title;
  elementById.appendChild(a);
  elementById.appendChild(br);
});
