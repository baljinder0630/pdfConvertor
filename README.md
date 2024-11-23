# Project Overview

A web application for secure document conversion from DOCX to PDF with password protection capabilities.

## Frontend Architecture

- **Technology Stack:**
    - React.js - Frontend framework
    - Tailwind CSS - Styling framework
- **Key Components:**
    - FileInput component with DOCX validation
    - PDF preview functionality
    - Password protection interface

## Backend Architecture

- **Technology Stack:**
    - Node.js - Server runtime
    - Express.js - Web framework

### API Endpoints

**POST /api/convertFile**

- Accepts DOCX file input
- Converts DOCX to PDF
- Implements PDF password protection
- Returns converted PDF file

## Deployment Infrastructure

- **Containerization:**
    - Docker container configuration
    - Multi-stage build optimization
- **Kubernetes Configuration: (NOT in use)**
    - Deployment manifests
- **CI/CD Pipeline:**
    - GitHub Actions workflow
    - Automated testing and deployment
    - AWS VM deployment configuration

## Production Environment

- **Hosting:**
    - AWS Virtual Machine
    - Docker runtime environment
    - Nginx reverse proxy configuration
    - SSL certificate configuration for [devbaljinder.in](http://devbaljinder.in)

## Security Considerations

- File validation and sanitization
- Secure PDF password encryption
- HTTPS implementation
- Rate limiting and request validation

## Monitoring

- **Health Check Endpoint:**
    - Implemented /health route for system status monitoring
    - Integration with UptimeRobot for continuous uptime tracking
    - Email notifications for downtime alerts
