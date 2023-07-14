interface IObject {
  key1: {
    key2: TestIdValues;
    key3: {
      key4: TestIdValues;
    };
  };
  key5: TestIdValues;
}

type TestIdFunction = () => string;
type TestIdValues = string | TestIdFunction;
type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};

function typedFreeze(obj: IObject) {
  const propNames = Object.getOwnPropertyNames(obj);

  // eslint-disable-next-line prefer-const
  for (let name of propNames) {
    // eslint-disable-next-line prefer-const
    let value = (obj as any)[name];

    if (value && typeof value === 'object') {
      typedFreeze(value);
    }
  }

  return Object.freeze(obj);
}

const object = {
  key1: {
    key2: 'example1',
    key3: {
      key4: 'example2',
    },
  },
  key5: () => 'example3',
} as const;

const TEST_IDS: Immutable<IObject> = typedFreeze(object);

// TEST_IDS.key1.key2 = '4';

console.log(TEST_IDS);
