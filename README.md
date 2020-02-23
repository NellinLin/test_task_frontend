# Тестовое задание
Автор: Шишова Анастасия

## Установка и запуск
```
git clone https://github.com/NellinLin/test_task_frontend.git

cd test_task_frontend

docker build -t phonecomp . && docker run -p 3030:3030 phonecomp
```
## Возможности
Собирает, прогоняет тесты и запускает сервер на 3030

```
npm run dev
```

Запускает storybook, где можно ознакомиться с нормальным состоянием и состоянием ошибки при проверке

```
npm run storybook
```

Тестирование (ещё один вариант)

```
npm run test
```

## Выполнено с помощью
* VanillaJS
* Webpack
* Babel
* Eslint
* Docker
* Jest
* Storybook
