<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Category</title>
</head>
<body>
    <center>
        <h1>Add New Category</h1>
    <table>
        <tr>
            <td>Title:</td>
            <td><input type="text" name="title" id="title"><br><br></td>
        </tr>
        <tr>
            <td>Content:</td>
            <td><textarea name="content" id="content" cols="22" rows="10"></textarea><br><br></td>
        </tr>
        <tr>
            <td>URL:</td>
            <td><input type="text" name="url" id="url"><br><br></td>
        </tr>
        <tr>
            <td>Meta Title:</td>
            <td><input type="text" name="metatitle" id="metatitle"><br><br></td>
        </tr>
        <tr>
            <td>Parent Category:</td>
            <td>
                <select name="parentcategory" id="parentcategory">
                    <option>Life Style</option>
                    <option>Health</option>
                    <option>Education</option>
                    <option>Musuc</option>
                </select><br><br>
            </td>
        </tr>
        <tr>
            <td>Image:</td>
            <td><input type="file" name="file" id="file"><br><br></td>
        </tr>
    </table>
    <input type="submit" value="Submit">
    
    </center>
</body>
</html>