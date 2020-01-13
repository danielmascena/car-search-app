// ETA: 1-2 hours
describe('<Pagination />', () => {
  it('should render "First" page link', () => {
    expect(false).toBe(true);
  });

  it('should render "Previous" page link', () => {
    expect(false).toBe(true);
  });

  it('should render "Page 2 of 10"', () => {
    expect(false).toBe(true);
  });

  it('should render "Next" page link', () => {
    expect(false).toBe(true);
  });

  it('should render "Last" page link', () => {
    expect(false).toBe(true);
  });

  describe('on first page', () => {
    it('should disable "First" page link', () => {
      expect(false).toBe(true);
    });

    it('should disable "Previous" page link', () => {
      expect(false).toBe(true);
    });

    it('should enable "Next" page link', () => {
      expect(false).toBe(true);
    });
  });

  describe('on not last page and not first page', () => {
    it('should enable "First" page link', () => {
      expect(false).toBe(true);
    });

    it('should enable "Previous" page link', () => {
      expect(false).toBe(true);
    });

    it('should enable "Next" page link', () => {
      expect(false).toBe(true);
    });

    it('should enable "Last" page link', () => {
      expect(false).toBe(true);
    });
  });

  describe('on last page', () => {
    it('should disable "Next" page link', () => {
      expect(false).toBe(true);
    });

    it('should disable "Last" page link', () => {
      expect(false).toBe(true);
    });
  });
});
