# Тестовое задание
Автор: Шишова Анастасия

## Установка и запуск
```
git clone https://github.com/NellinLin/test_task_frontend.git

cd test_task_frontend

docker build -t phonecomp . && docker run -p 3030:3030 phonecomp
```
## Возможности
Перед тем, как выполнять автоматизированные задачи, необходимо установить зависимости: `npm install`

npm scripts       | Выполняемые задачи
------------------|----------------------
npm run dev       | Собирает, проходит функциональное тестирование, запускает сервер на 3030 порту
npm run storybook | Запускает storybook, для ознакомления с нормальным состоянием компонента и состоянием ошибки при проверке
npm run test      | Прохождение функционального тестирования


## Выполнено с помощью
* VanillaJS
* Webpack
* Babel
* Eslint
* Docker
* Jest
* Storybook
