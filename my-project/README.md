#Сборка проекта на Gulp 4
---
___Настройка нашего проекта на Gulp и написание кода на:___
- HTML
- CSS, SCSS, SASS
- Java Script
###Функционал сборки
---
- минификация HTML
- компиляция препроцессоров SASS(SCSS)
- минификация CSS
- автоматическое добавление префиксов CSS
- преобразования кода ECMAScript 2015 + в обратно совместимую версию JavaScript с помощью Babel
- минификация JavaScript
- объединение нескольких файлов JavaScript в один
- сжатие изображений
- отслеживание новых изображений, которые еще не были сжаты
- отслеживание изменений в файлах и автоматический запуск повторной обработки
- генерация sourcemaps
- локальный сервер с автоматическим обновлением страницы при изменении файлов
###Input
---
|                | HTML       | SCSS               | Scripts | Images           |
-----------------|:----------:|:------------------:|:-------:|:----------------:|
| __Каталог__    | dist/pages | dist/scss          | dist/js | dist/js          |
| __Расширение__ | .html, .pug| .css, .sass, .scss | .js     | .jpg, .png, .gif |
###Output
---
|          | HTML       | SCSS                  | Scripts              | Images           |
-----------|:----------:|:---------------------:|:--------------------:|:----------------:|
| __Путь__ | build/     | build/css/main.min.css| build/js/main.min.js | build/img/       |
###Запуск
---
1. Скачать все файлы проекта
2. В терминале перейти в каталог проекта
3. Выполнить команду: npm i (должен быть установлен node.js)
4. Создать каталоги и файлы
5. Выполнить команду: gulp - npm run scss-watch (запуск таска default)
###Используемые NPM пакеты
---
- [gulp](https://www.npmjs.com/package/gulp) Сборщик Gulp
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin) Минификация HTML файлов
- [sass](https://www.npmjs.com/package/sass) Компилятор Sass
- [gulp-sass](https://www.npmjs.com/package/gulp-sass) Компиляция Sass и Scss файлов
- [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) Сжатие и оптимизация Java Script кода
- [gulp-babel](https://www.npmjs.com/package/gulp-babel) Преобразует Java Script в старый стандарт
- [@babel/core](https://www.npmjs.com/package/@babel/core) Ядро Babel
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) Пресет для компиляции Babel
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) Минификация и оптимизация CSS файлов
- [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) Карта строк кода для инструментов разработчика
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) Автоматическое добавление префиксов в CSS
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) Сжатие изображений
- [gulp-concat](https://www.npmjs.com/package/gulp-concat) Объединение нескольких файлов в один
- [gulp-newer](https://www.npmjs.com/package/gulp-newer) Отслеживание только новых файлов
- [gulp-rename](https://www.npmjs.com/package/gulp-rename) Переименовывает файлы
- [gulp-size](https://www.npmjs.com/package/gulp-size) Отображение информации о размерах файлов в терминале
