import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PollyService } from './polly.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
    private api: PollyService,
  ) { }

  dataForm: any = FormGroup
  id = '19B4pBVl0_42jYDWqRvG2CTWTpduRoDIp'
  voice: string[] = ["Joey", "Joanna", "Ivy"]
  selectedVoice = ''
  audio = new Audio()
  error: any = ''
  ngOnInit(): void {
    this.dataForm = this.formbuilder.group({
      text: [null, Validators.required]
    })
  }

  onSubmit() {
    const formdata = this.dataForm.value
    const data = {
      text: formdata.text,
      voice: this.selectedVoice
    }
    console.log(data);
    this.api.speak(data).subscribe((res: any) => {
      if (res.message) {
        this.error = res.message
      } else {
        this.id = res.id
        this.error = null
        this.onplay(this.id)
      }
    }, (error) => {
      console.log(error)
    })
  }

  onplay(id: string) {
    this.audio.src = `https://docs.google.com/uc?export=download&id=${id}`
    this.audio.load()
    this.audio.play()
  }
}
