import expect from 'expect';

export default function(editor) {
  const spy = expect.createSpy();
  editor.run(
    'onKeyDown',
    {
      key: 'Backspace',
      preventDefault: spy,
      stopPropagation: () => {},
    }
  );
  expect(spy).toNotHaveBeenCalled()
}
