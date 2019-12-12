# solved-tasks
#### Задача №3
     
     Дан массив:
     String[][] array = {{“Привет”, “всем”, “кто”}, {“изучает”, “язык”, “программирования”}, {“java”}};
     необходимо подсчитать количество строк в массиве которые не содержат буквы “е”.

```java
    String[][] array2 = {{"Привет", "всем", "кто"}, {"изучает", "язык", "программирования"}, {"java"}};
        int countLines = 0;

        for (int i = 0; i < array2.length; i++) {
            for (int j = 0; j < array2[i].length; j++) {
                if (array2[i][j].contains ("е")){
                    continue;
                } else countLines++;
            }

        }
        System.out.println(countLines);
```
