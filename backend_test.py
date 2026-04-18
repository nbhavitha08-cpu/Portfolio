#!/usr/bin/env python3
"""
Backend API Testing for Bhavitha's Portfolio Contact Form
Tests the contact form API endpoints with various scenarios
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env
BACKEND_URL = "https://profile-showcase-151.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_contact_api():
    """Test all contact form API scenarios"""
    print("=" * 60)
    print("TESTING BHAVITHA'S PORTFOLIO CONTACT FORM API")
    print("=" * 60)
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base: {API_BASE}")
    print()
    
    results = {
        "total_tests": 0,
        "passed": 0,
        "failed": 0,
        "test_details": []
    }
    
    # Test 1: Valid Contact Submission
    print("TEST 1: Valid Contact Submission")
    print("-" * 40)
    test_data = {
        "name": "John Doe",
        "email": "john@example.com", 
        "message": "This is a test message for the portfolio contact form"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and data.get("contact_id"):
                print("✅ PASSED: Valid contact submission successful")
                results["passed"] += 1
                results["test_details"].append({
                    "test": "Valid Contact Submission",
                    "status": "PASSED",
                    "details": f"Contact ID: {data.get('contact_id')}"
                })
            else:
                print("❌ FAILED: Response missing success=true or contact_id")
                results["failed"] += 1
                results["test_details"].append({
                    "test": "Valid Contact Submission", 
                    "status": "FAILED",
                    "details": "Response missing required fields"
                })
        else:
            print(f"❌ FAILED: Expected 200, got {response.status_code}")
            results["failed"] += 1
            results["test_details"].append({
                "test": "Valid Contact Submission",
                "status": "FAILED", 
                "details": f"Wrong status code: {response.status_code}"
            })
    except Exception as e:
        print(f"❌ FAILED: Exception occurred - {str(e)}")
        results["failed"] += 1
        results["test_details"].append({
            "test": "Valid Contact Submission",
            "status": "FAILED",
            "details": f"Exception: {str(e)}"
        })
    
    results["total_tests"] += 1
    print()
    
    # Test 2: Invalid Email
    print("TEST 2: Invalid Email Validation")
    print("-" * 40)
    test_data = {
        "name": "Test User",
        "email": "invalid-email",
        "message": "Testing invalid email"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 422]:
            print("✅ PASSED: Invalid email properly rejected")
            results["passed"] += 1
            results["test_details"].append({
                "test": "Invalid Email Validation",
                "status": "PASSED",
                "details": f"Correctly rejected with status {response.status_code}"
            })
        else:
            print(f"❌ FAILED: Expected 400/422, got {response.status_code}")
            results["failed"] += 1
            results["test_details"].append({
                "test": "Invalid Email Validation",
                "status": "FAILED",
                "details": f"Wrong status code: {response.status_code}"
            })
    except Exception as e:
        print(f"❌ FAILED: Exception occurred - {str(e)}")
        results["failed"] += 1
        results["test_details"].append({
            "test": "Invalid Email Validation",
            "status": "FAILED",
            "details": f"Exception: {str(e)}"
        })
    
    results["total_tests"] += 1
    print()
    
    # Test 3: Short Name Validation
    print("TEST 3: Short Name Validation")
    print("-" * 40)
    test_data = {
        "name": "A",
        "email": "test@test.com",
        "message": "Testing short name"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            print("✅ PASSED: Short name properly rejected")
            results["passed"] += 1
            results["test_details"].append({
                "test": "Short Name Validation",
                "status": "PASSED",
                "details": "Correctly rejected short name"
            })
        else:
            print(f"❌ FAILED: Expected 400, got {response.status_code}")
            results["failed"] += 1
            results["test_details"].append({
                "test": "Short Name Validation",
                "status": "FAILED",
                "details": f"Wrong status code: {response.status_code}"
            })
    except Exception as e:
        print(f"❌ FAILED: Exception occurred - {str(e)}")
        results["failed"] += 1
        results["test_details"].append({
            "test": "Short Name Validation",
            "status": "FAILED",
            "details": f"Exception: {str(e)}"
        })
    
    results["total_tests"] += 1
    print()
    
    # Test 4: Short Message Validation
    print("TEST 4: Short Message Validation")
    print("-" * 40)
    test_data = {
        "name": "Test User",
        "email": "test@test.com",
        "message": "Short"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=test_data, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 400:
            print("✅ PASSED: Short message properly rejected")
            results["passed"] += 1
            results["test_details"].append({
                "test": "Short Message Validation",
                "status": "PASSED",
                "details": "Correctly rejected short message"
            })
        else:
            print(f"❌ FAILED: Expected 400, got {response.status_code}")
            results["failed"] += 1
            results["test_details"].append({
                "test": "Short Message Validation",
                "status": "FAILED",
                "details": f"Wrong status code: {response.status_code}"
            })
    except Exception as e:
        print(f"❌ FAILED: Exception occurred - {str(e)}")
        results["failed"] += 1
        results["test_details"].append({
            "test": "Short Message Validation",
            "status": "FAILED",
            "details": f"Exception: {str(e)}"
        })
    
    results["total_tests"] += 1
    print()
    
    # Test 5: Get All Contacts
    print("TEST 5: Get All Contacts")
    print("-" * 40)
    
    try:
        response = requests.get(f"{API_BASE}/contacts", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ PASSED: Retrieved {len(data)} contacts")
                results["passed"] += 1
                results["test_details"].append({
                    "test": "Get All Contacts",
                    "status": "PASSED",
                    "details": f"Retrieved {len(data)} contacts"
                })
            else:
                print("❌ FAILED: Response is not an array")
                results["failed"] += 1
                results["test_details"].append({
                    "test": "Get All Contacts",
                    "status": "FAILED",
                    "details": "Response is not an array"
                })
        else:
            print(f"❌ FAILED: Expected 200, got {response.status_code}")
            results["failed"] += 1
            results["test_details"].append({
                "test": "Get All Contacts",
                "status": "FAILED",
                "details": f"Wrong status code: {response.status_code}"
            })
    except Exception as e:
        print(f"❌ FAILED: Exception occurred - {str(e)}")
        results["failed"] += 1
        results["test_details"].append({
            "test": "Get All Contacts",
            "status": "FAILED",
            "details": f"Exception: {str(e)}"
        })
    
    results["total_tests"] += 1
    print()
    
    # Summary
    print("=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    print(f"Total Tests: {results['total_tests']}")
    print(f"Passed: {results['passed']}")
    print(f"Failed: {results['failed']}")
    print(f"Success Rate: {(results['passed']/results['total_tests']*100):.1f}%")
    print()
    
    if results['failed'] > 0:
        print("FAILED TESTS:")
        for test in results['test_details']:
            if test['status'] == 'FAILED':
                print(f"  - {test['test']}: {test['details']}")
        print()
    
    return results

if __name__ == "__main__":
    test_results = test_contact_api()
    
    # Exit with error code if any tests failed
    if test_results['failed'] > 0:
        sys.exit(1)
    else:
        sys.exit(0)