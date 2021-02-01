$(document).ready(function () {
    //JavaScript de los videos
    const img = document.getElementById('carousel');
    const rightBtn = document.getElementById('right-btn');
    const leftBtn = document.getElementById('left-btn');
    const vurl = document.getElementById('id-video');

    // Lista de los url de los videos
    //let video = ['https://www.youtube.com/embed/vnnL17I7pIY', 
    //'https://www.youtube.com/embed/xli_FI7CuzA', 
    //'https://www.youtube.com/embed/zVjZdrh3tSA'];
    
    // Lista de los url de los videos
    var url1 = $('#id-video1').attr('href');
    var url2 = $('#id-video2').attr('href');   
    var url3 = $('#id-video3').attr('href');

    let videos = [url1, url2, url3]

    img.src = videos[0];
    let position = 0;

    moveRight = () => {
        if (position >= videos.length - 1) {
            position = 0
            img.src = videos[position];
            return;
        }
        img.src = videos[position + 1];
        position++;
    }

    moveLeft = () => {
        if (position < 1) {
            position = videos.length - 1;
            img.src = videos[position];
            return;
        }
        img.src = videos[position - 1];
        position--;
    }

    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);
    //Fin del javascript de los videos


});

function BubbleView(){
    console.log('Prueba de animación');
    //Animación del Bubble Sort
    const boton1 = document.querySelector("#btnPlay");//boton play
    const boton2 = document.querySelector("#btnStop");//boton stop
    const boton3 = document.querySelector("#btnReiniciar");//boton reiniciar
    boton3.disabled = true;
    boton2.disabled = true;
    
    $("#btnPlay").click(function () {
        console.log("Animación")
        boton1.disabled = true;
        boton2.disabled = false;
        boton3.disabled = false;   
        $(".data-container").empty();      
        function principalBubble() {
            const container = document.querySelector(".data-container");
            function generateBlocks(num) {
                if (num && typeof num !== "number") {
                    alert("First argument must be a typeof Number");
                    return;
                }
                for (let i = 0; i < num; i += 1) {
                    const value = Math.floor(Math.random() * 100);

                    const block = document.createElement("div");
                    block.classList.add("block");
                    block.style.height = `${value * 3}px`;
                    block.style.transform = `translateX(${i * 30}px)`;

                    const blockLabel = document.createElement("label");
                    blockLabel.classList.add("block__id");
                    blockLabel.innerHTML = value;

                    block.appendChild(blockLabel);
                    container.appendChild(block);
                }
            }
            function swap(el1, el2) {
                return new Promise(resolve => {
                    const style1 = window.getComputedStyle(el1);
                    const style2 = window.getComputedStyle(el2);

                    const transform1 = style1.getPropertyValue("transform");
                    const transform2 = style2.getPropertyValue("transform");

                    el1.style.transform = transform2;
                    el2.style.transform = transform1;

                    // Wait for the transition to end!
                    window.requestAnimationFrame(function () {
                        setTimeout(() => {
                            container.insertBefore(el2, el1);
                            resolve();
                        }, 250);
                    });
                });
            }
            async function bubbleSort(delay = 150) {
                if (delay && typeof delay !== "number") {
                    alert("EL primer argumento debe de ser un número");
                    return;
                }
                let blocks = document.querySelectorAll(".block");
                for (let i = 0; i < blocks.length - 1; i += 1) {
                    for (let j = 0; j < blocks.length - i - 1; j += 1) {

                        blocks[j].style.backgroundColor = "#FF4949";
                        blocks[j + 1].style.backgroundColor = "#FF4949";

                        await new Promise(resolve =>
                            setTimeout(() => {
                                resolve();
                            }, delay)
                        );

                        const value1 = Number(blocks[j].childNodes[0].innerHTML);
                        const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

                        if (value1 > value2) {
                            await swap(blocks[j], blocks[j + 1]);
                            blocks = document.querySelectorAll(".block");
                        }
                        blocks[j].style.backgroundColor = "#58B7FF";
                        blocks[j + 1].style.backgroundColor = "#58B7FF";
                    }
                    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
                }
                boton1.disabled = false;
                boton2.disabled = true;
                boton3.disabled = true;
                const blockLabel = document.createElement("label");
                
                //alert("La lista se ha terminado de ordenar");                
            }
            generateBlocks(num = 15);
            bubbleSort();
        };
        principalBubble();
        $("#btnStop").click(function () {
            console.log("Detenido");
            boton1.disabled = false;
            boton2.disabled = true;
            boton3.disabled = true;
            $(".data-container").empty();       
        });
        $("#btnReiniciar").click(function () {
            console.log("Reiniciado");
            boton1.disabled = true;
            $(".data-container").empty();
            principalBubble();                               
        });
    });
    //Fin de la Animación del Bubble Sort

}

function InsertionView() {
    //Inicio de la animación del Insertion Sort
    
    const btnIns1 = document.querySelector("#btnPlayIns");//boton play
    const btnIns2 = document.querySelector("#btnStopIns");//boton stop
    const btnIns3 = document.querySelector("#btnReiniciarIns");//boton reiniciar
    btnIns3.disabled = true;
    btnIns2.disabled = true;
    $("#btnPlayIns").click(function () {
        console.log("Animación")
        btnIns1.disabled = true;
        btnIns2.disabled = false;
        btnIns3.disabled = false;   
        $(".data-container").empty();    
        function principalInsertion() {
            const container = document.querySelector(".data-container");
            var TargetTick;
            var Tick;
            var Timer1;
            var A; // Arreglo a ser ordenado
            var arr0 = "<span id='arr0' >&darr;</span>";
            var arr1 = "<span id='arr1' >&darr;</span>";

            function ExecuteSort() {
                A = [79, 56, 19, 44, 86, 22, 41, 39, 11, 5];
                var Speed = 1000;
                var Alg = 1;
                TargetTick = 1;
                // Start animation
                if (Timer1) clearInterval(Timer1);
                if (Alg == 1)
                    Timer1 = setInterval(AnimateInsertionSort, Speed);                                  
            }          

            function InsertionSort(A) {
                for (var i = 1; i < A.length; i++) {
                    var item = A[i];
                    var j = i - 1;                   
                    while ((j >= 0)) {
                        if (UpdateTick()) { PrintArray(A, j + 1, i, i); return; }
                        if (item >= A[j]) break;

                        A[j + 1] = A[j];
                        A[j] = item; 
                        j--;
                    }
                    A[j + 1] = item;
                }
                PrintArray(A, i + 1, -1, -1);
                EndAnimate();
                btnIns1.disabled = false;
                btnIns2.disabled = true;
                btnIns3.disabled = true;
            }

            function PrintArray(A, start, target, minpos) {                
                var x = "";
                for (var i = 0; i < A.length; i++) {
                    var st = "";
                    if (i < start) st = " class ='finished'";
                    var ext = "";
                    if (i == start) { ext = arr0; st = "style='background-color:#58B7FF'"; }
                    if (i == target) { st = "style='background-color:white'"; }
                    if (i == minpos) { ext += arr1; st = "style='background-color:white;border-color: red'"; }
                    x += "<li " + st + ">" + A[i] + ext + "</li>";
                }
                outDiv.innerHTML = "<ul>" + x + "</ul>";
            }
            function AnimateInsertionSort() { 
                B = A.slice();    
                Tick = 0;
                InsertionSort(B);
                TargetTick++;
            }
            function EndAnimate() { clearInterval(Timer1); }
            function UpdateTick() {
                Tick++;
                return (Tick == TargetTick);
            }
           ExecuteSort();
            $("#btnStopIns").click(function () {
                console.log("Detenido");
                btnIns1.disabled = false;
                btnIns2.disabled = true;
                btnIns3.disabled = true;
                $(".data-container").empty();
                clearInterval(Timer1);
            });
            $("#btnReiniciarIns").click(function () {
                console.log("Reiniciado");
                btnIns1.disabled = true;
                $(".data-container").empty();
                clearInterval(Timer1);
                principalInsertion();
            });
        }        
        principalInsertion();           
        
    });
    
//Fin de la animación del Insertion Sort
}

function MergeView() {
    //Inicio de la animación del Insertion Sort
    
    const btnIns1 = document.querySelector("#btnPlayQuick");//boton play
    const btnIns2 = document.querySelector("#btnStopQuick");//boton stop
    const btnIns3 = document.querySelector("#btnReiniciarQuick");//boton reiniciar
    btnIns3.disabled = true;
    btnIns2.disabled = true;
    $("#btnPlayQuick").click(function () {
        console.log("Animación")
        btnIns1.disabled = true;
        btnIns2.disabled = false;
        btnIns3.disabled = false;   
        $(".data-container").empty();    
        function principalQuick() {
            const container = document.querySelector(".data-container");
            
            $("#btnStopQuick").click(function () {
                console.log("Detenido");
                btnIns1.disabled = false;
                btnIns2.disabled = true;
                btnIns3.disabled = true;
                $(".data-container").empty();
                clearInterval(Timer1);
            });
            $("#btnReiniciarQuick").click(function () {
                console.log("Reiniciado");
                btnIns1.disabled = true;
                $(".data-container").empty();
                
                principalQuick();
            });
        }
        
        principalQuick();
          
        
    });

//Fin de la animación del Quick Sort
}

function QuickView() {
    //Inicio de la animación del Quick Sort
    
    const btnIns1 = document.querySelector("#btnPlayQuick");//boton play
    const btnIns2 = document.querySelector("#btnStopQuick");//boton stop
    const btnIns3 = document.querySelector("#btnReiniciarQuick");//boton reiniciar
    btnIns3.disabled = true;
    btnIns2.disabled = true;
    var arr0 = "<span id='arr0' >&darr;</span>";
    var arr1 = "<span id='arr1' >&darr;</span>";   
    const Sort = {
        init: function (options, elem) {
            var self = this;
            self.elem = elem;
            self.$elem = $(elem);
            self.options = $.extend({}, $.fn.animatedSort.options, options);
            self.highlightColor = self.options.highlightColor;
            self.sortedColor = self.options.sortedColor;
            self.animateColor = jQuery.Color ? true : false;
            self.stepTime = self.options.stepTime;
            self.slideTime = self.stepTime * (2.0 / 3);
            self.swapTime = self.stepTime * (15.0 / 24);
            self.colorTime = self.stepTime * (0.5);
            self.sortAlgorithm = self.options.sortAlgorithm;
            self.listType = self.options.listType;
            self.animationTrigger = self.options.animationTrigger;
            self.resetTrigger = self.options.resetTrigger;
            self.callback = self.options.callback;
            self.animSteps = [];
        },
        initList: function () {
            var list = [];
            var self = this;
            self.numbers = self.$elem.find("li");
            self.initialColor = self.numbers.eq(0).css("color");
            self.initialFontSize = self.numbers.eq(0).css("font-size");
            self.slideDistance = Number(self.initialFontSize.substring(0, self.initialFontSize.length - 2)) * 2;
            self.$elem.find("li").each(function () {
                list.push(Number($(this).text()));
                $(this).css({ "position": "relative", "top": 0, "left": 0 });
                if (self.highlightColor !== null && self.sortedColor !== null) {
                    $(this).attr('sorted', 'false');
                }
            });
            self.list = list.slice(0);
            return list;
        },
        randList: function (bottom, top, length) {
            var cantidadNumeros = 10;
            var list = [];
            for (var n = 0; n < length; n++) {
                list.push(Math.floor(Math.random() * (top - bottom) + bottom));
            }
            return list;
        },
        genList: function (list) {
            var self = this;
            var len = list.length;
            self.$elem.append("<ul></ul>");
            for (var n = 0; n < len; n++) {
                self.$elem.children("ul").append("<li>" + list[n] + "</li>");
            }
        },
        setSorted: function (i) {
            var self = this;
            self.highlight([i], self.sortedColor);
        },
        highlight: function (array, color) {
            var self = this;
            if (color !== null) {
                self.animSteps.push(function () {
                    var $liSel = self.numbers.eq(array[0]).add(self.numbers.eq(array[1]));
                    if (self.numbers.eq(0).attr('sorted')) {
                        $liSel = $liSel.filter("[sorted='false']");
                    }
                    if (self.animateColor) {
                        $liSel.animate({ color: color }, self.colorTime, function () {
                            if (color === self.sortedColor) {
                                $liSel.attr('sorted', 'true');
                            }
                        });
                    } else {
                        $liSel.css("color", color);
                        if (color === self.sortedColor) {
                            $liSel.attr('sorted', 'true');
                        }
                    }
                });
            }
        },
        addHighlightColor: function (array) {
            var self = this;
            self.highlight(array, self.highlightColor);
        },

        removeHighlightColor: function (array) {
            var self = this;
            self.highlight(array, self.initialColor);
        },
        slide: function (array, distance) {
            var self = this;
            var $liSel = self.numbers.eq(array[0]);
            for (var n = 1; n < array.length; n++) {
                $liSel = $liSel.add(self.numbers.eq(array[n]));
            }
            self.animSteps.push(function () {
                $liSel.animate({ left: distance }, self.slideTime);
            });
        },

        slideOut: function (array) {
            var self = this;
            self.slide(array, self.slideDistance);
        },

        slideIn: function (array) {
            var self = this;
            self.slide(array, 0);
        },

        swap: function (list, i1, i2) {
            var self = this;
            var temp = list[i1];
            list[i1] = list[i2];
            list[i2] = temp;
            var $li1 = self.numbers.eq(i1);
            var $li2 = self.numbers.eq(i2);
           
            self.animSteps.push(function () {
                var li1_val = $li1.text();
                var li2_val = $li2.text();
                var li1_pos = $li1.position().top;
                var li2_pos = $li2.position().top;
                var li1_left = $li1.css("left");
                var li2_left = $li2.css("left");
                var li1_color = $li1.css("color");
                var li2_color = $li2.css("color");
                var li1_sorted = $li1.attr("sorted");
                var li2_sorted = $li2.attr("sorted");

                $li1.animate({ top: li2_pos - li1_pos }, self.swapTime, function () {
                    $li1.css({ top: 0, left: li2_left, backgroundColor: "#13CE66" });
                    $li1.css({ top: 0, left: li2_left, color: li2_color });
                    $li1.text(li2_val);
                    $li1.attr("sorted", li2_sorted);
                });
                $li2.animate({ top: li1_pos - li2_pos }, self.swapTime, function () {
                    $li2.css({ top: 0, left: li1_left, color: "li1_color" });
                    //$li2.css({ top: 0, left: li1_left, backgroundColor: "#13CE66" });
                    $li2.text(li1_val);
                    $li2.attr("sorted", li1_sorted);
                });
            });
        },

        slideSwap: function (list, i1, i2) {
            var self = this;
            self.slideOut([i1, i2]);
            self.swap(list, i1, i2);
            self.slideIn([i1, i2]);
        },

        animation: function () {
            var self = this;
            if (self.animSteps.length) {
                setTimeout(function () {
                    self.animSteps.splice(0, 1)[0]();
                    self.animation();
                }, self.stepTime);
            }
        },

        quick: function (list) {
            var self = this;
            var len = list.length;
            function partition(array, begin, end, pivot) {
                var pivotValue = array[pivot];
                self.addHighlightColor([pivot]);
                
                if (pivot !== end) {
                    self.slideSwap(array, pivot, end);                                      
                }
                var store = begin;
                for (var n = begin; n < end; n++) {
                    self.addHighlightColor([n]);
                    if (array[n] < pivotValue) {
                        if (store !== n) {
                            self.slideSwap(array, store, n);
                            self.removeHighlightColor([store]);
                        }
                        else {
                            self.removeHighlightColor([n]);
                        }
                        store++;
                    }
                    else {
                        self.removeHighlightColor([n]);
                    }
                }
                if (end !== store) {
                    self.slideSwap(array, end, store);
                }
                self.removeHighlightColor([store]);
                self.setSorted(store);
                return store;
            }

            function quickSort(array, begin, end) {
                if (end > begin) {
                    var pivot = begin + Math.floor(Math.random() * (end - begin));
                    
                    pivot = partition(array, begin, end, pivot);
                    quickSort(array, begin, pivot);
                    quickSort(array, pivot + 1, end);
                }
                else {
                    self.setSorted(begin);
                }
            }
            quickSort(list, 0, len - 1);
        }
    };

    $.fn.animatedSort = function (options) {
        return this.each(function () {
            var sort = Object.create(Sort);
            sort.init(options, this);
            if ($.isArray(sort.listType)) {
                sort.genList(sort.listType)
            }
            else if (typeof (sort.listType) === "object") {
                sort.genList(sort.randList(sort.listType.bottom, sort.listType.top, sort.listType.length));
            }
            sort[sort.sortAlgorithm](sort.initList());
            if (typeof (sort.callback) === "function") {
                var self = this;
                sort.animSteps.push(function () { sort.callback.call(self) });
            }
           
            $("#btnPlayQuick").click(function () {
                console.log("Play");
                btnIns1.disabled = true;
                btnIns2.disabled = false;
                btnIns3.disabled = false;
                sort.animation();
                
            });
            $("#btnReiniciarQuick").click(function () {
                console.log("Reiniciado");
                btnIns1.disabled = true;   
                //sort.animSteps.push(function () { sort.callback.call(self) });                   
                sort.$elem.find("ul").eq(0).remove();
                sort.options.listType = sort.list;
                sort.$elem.animatedSort(sort.options);
                sort.animation();
                
            });

            $("#btnStopQuick").click(function () {
                console.log("Detenido");
                btnIns1.disabled = false;
                btnIns2.disabled = true;
                btnIns3.disabled = true;
                sort.$elem.find("ul").eq(0).remove();
                sort.options.listType = sort.list;
                sort.$elem.animatedSort(sort.options);
                
            });
        });
    };

    $.fn.animatedSort.options = {
        sortAlgorithm: "quick",    // string for type of sort
        highlightColor: "red",      // highlight color (null sets no color)
        sortedColor: "blue",        // sorted color (null sets to no color)
        stepTime: 1000,             // ms between animation steps
        listType: "existing",       // "existing", object for random , array
        animationTrigger: null,     // animation trigger "none" loads on document, object for event and selector
        resetTrigger: null,         // trigger to reset and reinitialize
        callback: null              // callback after animation completes
    };
    
    $("#container").animatedSort({
        stepTime: 600,
        listType: { bottom: 0, top: 100, length: 10 },
        sortAlgorithm: "quick",
        highlightColor: "red",
        sortedColor: "black",
        animationTrigger: { event: "click", selector: "#btnPlayQuick" },
        resetTrigger: { event: "click", selector: "#btnReiniciarQuick" }
    });
    
//Fin de la animación del Quick Sort
}