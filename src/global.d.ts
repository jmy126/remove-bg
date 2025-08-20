interface Navigator {
  readonly gpu: GPU;
}

interface Window {
  ort: {
    InferenceSession: any;
    Tensor: any;
  };
}
