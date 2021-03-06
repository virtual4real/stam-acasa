import mockApi from "./api";
import EvaluationApi from "./evaluationApi";

jest.mock("./api");

describe("EvaluationApi", () => {
  const formResults = { someField: "someValue" };

  it("sends self evaluation form results", () => {
    EvaluationApi.sendSelfEvaluationResults(formResults);

    expect(mockApi.post).toHaveBeenCalledWith("/form", formResults);
  });

  it("sends other evaluation form results", () => {
    EvaluationApi.sendDependantEvaluationResult(11, formResults);

    expect(mockApi.post).toHaveBeenCalledWith("/form?id=11", formResults);
  });
});
