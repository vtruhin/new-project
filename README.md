# Как работать с CSS

main.css генерируется с помощью Grunt и PostCSS.

**Не редактируйте main.css! Редактируйте только .pcss файлы и затем запускайте `grunt build`.**

## Установка

1. Установить [Node.js](http://nodejs.org/).
2. Установить Grunt Command Line Interface (grunt-cli) and Bower:

        $ npm install -g grunt-cli
        $ npm install -g bower

3. Зайти в папку __dev__ и установить все нужные модули для разработки:

        $ npm install
        $ bower install

4. Запустить `grunt build`.

## Генерация CSS

Запустить следящий сервис, который будет генерировать dev-версию (несжатую) main.css при каждом сохранении *.pcss файла:

    $ grunt

Сгенерировать версию для продакшена (минифицированную):

    $ grunt build

# Расположение файлов:

Картинки ложить в **/dev/img**. Они оптимизируются и копируются в _/img_ автоматически.

JavaScript библиотеки и плагины ложить в **/dev/js**. Они конкатенируются в _/js/libs.js_. Скрипты в **/js/scripts.js** (не конкатенируются).

HTML в корне проекта.

## Другие Grunt-задачи

**compress** — создать .zip:

* **all** — исходники и сгенерированное
* **markup** — только сгенерированное
* **source** — только исходники

**deploy** — залить файлы на сервер.

## Стоит почитать

[Grunt для тех, кто считает штуки вроде него странными и сложными](http://frontender.info/grunt-is-not-weird-and-hard/)

----------

# How to edit CSS

All CSS generated with Grunt and PostCSS.

**DON'T EDIT main.css! Edit only .pcss files and then compile with `grunt build`.**

## Setup

1. Install [Node.js](http://nodejs.org/).
2. Install Grunt Command Line Interface (grunt-cli) and Bower:

        $ npm install -g grunt-cli
        $ npm install -g bower

3. In __dev__ folder install development modules:

        $ npm install
        $ bower install

4. Run `grunt build`.

## Generating CSS

Start watching service which generate _dev_ version (unminified) on each *.pcss-file save:

    $ grunt

Generate _production_ (minified) version:

    $ grunt build

## Files placement

Images put in **/dev/img**. They optimized and copied in _/img_ automatically.

JavaScript libraries and plugins put in **/dev/js**. They concatenated in _/js/libs.js_. Scripts in **/js/scripts.js** (not concatenated).

HTML in project root.

## Worth reading

[Grunt for People Who Think Things Like Grunt are Weird and Hard](http://24ways.org/2013/grunt-is-not-weird-and-hard/)
