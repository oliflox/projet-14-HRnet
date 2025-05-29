# @oliflox/date-picker

Un composant de sélection de date simple et élégant pour React.

## Installation

```bash
npm install @oliflox/date-picker
```

## Utilisation

```jsx
import { DatePicker } from '@oliflox/date-picker';

function App() {
  return (
    <DatePicker
      onChange={(date) => console.log(date)}
    />
  );
}
```

## Props

- `onChange`: Fonction appelée lorsque la date est modifiée
- `value`: Date sélectionnée (format Date)
- `placeholder`: Texte d'exemple dans l'input
- `disabled`: Désactive le composant
- `className`: Classe CSS personnalisée


