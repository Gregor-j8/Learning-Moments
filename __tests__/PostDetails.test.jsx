import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import { PostDetails } from "./PostDetails"
import { getAllPostDetails } from "../../services/Posts"

// Mock the service function to prevent actual API calls
jest.mock("../../services/Posts", () => ({
  getAllPostDetails: jest.fn()
}))

// Wrap the component with Router and mock the useParams hook
jest.mock("react-router-dom", () => ({
  useParams: jest.fn()
}))

describe("PostDetails Component", () => {
  it("should render the post details correctly", async () => {
    // Mock useParams to return a test postDetailsId
    const mockPostDetailsId = "123"
    useParams.mockReturnValue({ postDetailsId: mockPostDetailsId })
    
    // Mock the API response from getAllPostDetails
    const mockPost = [{
      user: { fullName: "John Doe" },
      title: "Post Title",
      topic: { name: "Technology" },
      body: "This is the body of the post.",
      likes: 100,
      date: "2025-03-01"
    }]
    getAllPostDetails.mockResolvedValue(mockPost)

    // Render the component
    render(<PostDetails />)

    // Wait for the async call to resolve and the component to render
    await waitFor(() => {
      // Check that the content is rendered correctly
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Post Title")).toBeInTheDocument()
      expect(screen.getByText("Technology")).toBeInTheDocument()
      expect(screen.getByText("This is the body of the post.")).toBeInTheDocument()
      expect(screen.getByText("100")).toBeInTheDocument()
      expect(screen.getByText("2025-03-01")).toBeInTheDocument()
    })
  })

  it("should show loading state while fetching post details", () => {
    // Mock the useParams to return a postDetailsId
    const mockPostDetailsId = "123"
    useParams.mockReturnValue({ postDetailsId: mockPostDetailsId })
    
    // Mock getAllPostDetails to return a pending Promise
    getAllPostDetails.mockReturnValue(new Promise(() => {})) // Pending promise to simulate loading

    // Render the component
    render(<PostDetails />)

    // Verify that the loading state or initial UI renders correctly
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("should handle error if the post details cannot be fetched", async () => {
    // Mock the useParams to return a postDetailsId
    const mockPostDetailsId = "123"
    useParams.mockReturnValue({ postDetailsId: mockPostDetailsId })
    
    // Mock getAllPostDetails to return a rejected Promise (simulate API failure)
    getAllPostDetails.mockRejectedValue(new Error("Failed to fetch"))

    // Render the component
    render(<PostDetails />)

    // Wait for the error to be displayed
    await waitFor(() => {
      expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument()
    })
  })
})
