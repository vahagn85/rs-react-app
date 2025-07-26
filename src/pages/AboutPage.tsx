function AboutPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">About</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Author Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <p className="mb-4">
            Hi! My name is Vahagn, a Front-End Developer. I am flexible, quick
            to pick up new skills and eager to learn from others.
          </p>
          <p className="mb-4">
            My GitHub -{' '}
            <a
              href="https://github.com/vahagn85"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              vahagn85
            </a>
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">RS School React course</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <p className="mb-4">
            The Rolling Scopes was founded in 2013 in Minsk as a community of
            Front-end developers. It has since grown into an enormous
            international developers community.
          </p>
          <a
            href="https://rs.school/courses/reactjs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Visit RS School React course
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
