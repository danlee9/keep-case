<html>
   <body>
        <form action="/uploadfile" method="POST" enctype="multipart/form-data">
            @csrf
            <input id="image-file" type="file" />
            <button type="submit">Submit</button>
        </form>
   </body>
</html>