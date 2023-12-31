# Vue Slider #

--

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue e un array di oggetti.

--

- Estrapoliamo la function **createApp** da Vue.
- Inseriamo l'array di oggetti in *data*.
- Richiamiamo il metodo *mount* e colleghiamo la function precedentemente estrapolata all'elemento del DOM.
- Dichiariamo *currentIndex* che sarà l'indice sul quale gireranno le immagini. 
- Inseriamo le immagini dinamicamente utilizzando un **v-for** nel DOM.
- Cancelliamo l'attributo *display:none* dal css per inserirlo dinamicamente usando il metodo **v-show** di Vue e rendiamo la prima immagine attiva collegando l'index number dell'array all currendIndex.
- Rendo dinamica la classe delle thumbanails, inserisco all'interno delle graffe un oggetto che abbia come chiave la classe che verra aggiunta e nel valore la condizione affinchè la classe sia aggiunta(ovvero, la thumbnail attiva sarà quella che avra lo stesso index number del currentIndex).
- Stampiamo in pagina i relativi titoli e le relative descrizioni ritoccando il css e rendendole dinamiche usando la sintassi *mustache*. 
- Utilizziamo la sintassi **@click** per gestire i bottoni prev e next e creiamo le relative funzioni.
- Creiamo le flag function per identificare quando siamo alla prima e all'ultima immagine  e le usiamo per modificare il current index creando un ciclo infinito.
- Creiamo una function in methods che modifi il *CurrentIndex* a seconda del parametro inserito.
- al click della thumbnail chiamiamo la function precedentemente creata e le diamo come parametro l'index number dell'array, cosicchè venga modificato il *currentIndex* e avremo come immagine principale quella appena clickata.
- Utilizziamo il metodo **mounted** per creare un **setInterval** che cambi immagine dopo 2 secondi.
- Creiamo una variabile *autoPlay* che utilizzeremo per interrompere la timing function con il **clearInterval** al hover del mouse sulle thumbnails.
- Creiamo 2 function in methods che serviranno rispettivamente a fermare la timing function e a farla ripartire, le andiamo a inserire nelle thumbnails del DOM con il **mouseenter** e il **mouseleave**. 
