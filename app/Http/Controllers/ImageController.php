<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function path($path)
    {
        $image = Image::where('path', $path)->first();
        return json_encode($image);
    }

    public function store(Request $request)
    {
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            // if ($file->isValid()) {
            //     $validated = $request->validate([
            //         'image' => 'mimes:jpeg,png|max:1024'
            //     ]);
            // }
            
            $check = true;
            while ($check) {
                $url = substr(md5(microtime()),rand(0,25),6);
                $stored = Image::where('path', $url)->first();
                if (!$stored) {
                    $originalName = $file->getClientOriginalName();
                    // $extension = $request->image->extension();
                    $extension = $file->getClientOriginalExtension();
                    $request->image->storeAs('/public', "$url.$extension");
                    $image = Image::create([
                        'path' => $url,
                        'original_name' => $originalName,
                        'extension' => $extension
                    ]);
                    $check = false;
                }
            }
                        
            return json_encode($image);
        }
    }

    public function index() {
        return view('uploadfile');
    }

    public function showUploadFile(Request $request) {
        $file = $request->file('image');
        Image::create([
            'path' => 'aaaaaa',
            'original_name' => 'alien',
            'extension' => 'jpg'
        ]);
     
        //Display File Name
        echo 'File Name: '.$file->getClientOriginalName();
        echo '<br>';
     
        //Display File Extension
        echo 'File Extension: '.$file->getClientOriginalExtension();
        echo '<br>';
     
        //Display File Real Path
        echo 'File Real Path: '.$file->getRealPath();
        echo '<br>';
     
        //Display File Size
        echo 'File Size: '.$file->getSize();
        echo '<br>';
     
        //Display File Mime Type
        echo 'File Mime Type: '.$file->getMimeType();
     
        //Move Uploaded File
        // $destinationPath = 'uploads';
        // $file->move($destinationPath,$file->getClientOriginalName());
    }
}
