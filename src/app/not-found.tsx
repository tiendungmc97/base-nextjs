export interface INotFoundProps {}

export default function NotFound(props: INotFoundProps) {
  return (
    <html>
      <body>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f7fafc",
          }}
        >
          <h1 style={{ fontSize: "2.25rem", fontWeight: "bold", color: "#2d3748" }}>
            404 - Page Not Found
          </h1>
          <p style={{ marginTop: "1rem", fontSize: "1.125rem", color: "#718096" }}>
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </body>
    </html>
  );
}
