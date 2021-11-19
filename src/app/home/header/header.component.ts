import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  imagePath !:string

  constructor() { }

  ngOnInit(): void {
  }


  imagePreview(e:Event) {

    let files:FileList|null = (e.target as HTMLInputElement).files
    let file:File|null|undefined =  files?.item(0)

    const fileReader:FileReader = new FileReader()
    fileReader.readAsDataURL(file as File)

    fileReader.onload = (ev:ProgressEvent<FileReader>) => {
      this.imagePath = ev.target?.result as string;
      // console.log(ev.target?.result as string)
    }
  }


}
