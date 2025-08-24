import { fileToBase64 } from './fileToBase64';

describe('fileToBase64 util', () => {
  let mockFileReader: {
    readAsDataURL: (file: File) => void;
    onload: (() => void) | null;
    onerror: ((error: ProgressEvent<FileReader>) => void) | null;
    result: string | ArrayBuffer | null;
    readyState: number;
    error: DOMException | null;
  };

  let originalFileReader: typeof FileReader;

  beforeEach(() => {
    originalFileReader = global.FileReader;

    mockFileReader = {
      readAsDataURL: vi.fn(),
      onload: null,
      onerror: null,
      result: null,
      readyState: 0,
      error: null,
    };

    global.FileReader = vi.fn(
      () => mockFileReader
    ) as unknown as typeof FileReader;
  });

  afterEach(() => {
    global.FileReader = originalFileReader;
    vi.clearAllMocks();
  });

  it('should convert a file to base64 string', async () => {
    const mockFile = new File(['test content'], 'image.png', {
      type: 'image/png',
    });
    const expectedBase64 = 'data:image/png;base64,abc123';

    mockFileReader.result = expectedBase64;

    const promise = fileToBase64(mockFile);

    mockFileReader.onload?.();

    await expect(promise).resolves.toBe(expectedBase64);

    expect(mockFileReader.readAsDataURL).toHaveBeenCalledWith(mockFile);
  });
});
