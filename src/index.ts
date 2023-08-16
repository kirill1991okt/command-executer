import { PromptService } from './core/prompt/prompt.service';

class App {
  async run() {
    const prompt = await new PromptService().input<number>(
      'Введите число',
      'number'
    );
    console.log(prompt);
  }
}

const app = new App();
app.run();
