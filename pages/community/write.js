import Button from "@/components/Button";
import Layout from "@/components/Layout";
import TextArea from "@/components/TextArea";

const write = () => {
  return (
    <Layout canGoBack title="Write Post">
      <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit" />
      </form>
    </Layout>
  );
};

export default write;
